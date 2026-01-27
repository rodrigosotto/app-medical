/**
 * Tipos de erro da aplicação
 */

export interface ApiErrorResponse {
  error: string;
  message?: string;
  statusCode?: number;
  code?: string;
}

export class ApiError extends Error {
  public statusCode: number;
  public code?: string;
  public response?: ApiErrorResponse;

  constructor(
    message: string,
    statusCode: number = 500,
    code?: string,
    response?: ApiErrorResponse
  ) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
    this.response = response;
  }
}

export class AuthError extends ApiError {
  constructor(
    message: string = 'Erro de autenticação',
    statusCode: number = 401,
    response?: ApiErrorResponse
  ) {
    super(message, statusCode, 'AUTH_ERROR', response);
    this.name = 'AuthError';
  }
}

export class NetworkError extends Error {
  constructor(message: string = 'Erro de conexão com o servidor') {
    super(message);
    this.name = 'NetworkError';
  }
}

export class ValidationError extends ApiError {
  constructor(message: string = 'Dados inválidos', response?: ApiErrorResponse) {
    super(message, 400, 'VALIDATION_ERROR', response);
    this.name = 'ValidationError';
  }
}

/**
 * Utilitário para extrair mensagem de erro amigável
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.response?.error || error.message;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  return 'Ocorreu um erro inesperado';
}

/**
 * Utilitário para criar erro a partir de resposta axios
 */
export function createErrorFromResponse(error: any): ApiError | NetworkError {
  // Erro de rede
  if (!error.response) {
    return new NetworkError('Não foi possível conectar ao servidor');
  }

  const { status, data } = error.response;

  // Erro de autenticação
  if (status === 401) {
    return new AuthError(data?.error || 'Credenciais inválidas', status, data);
  }

  // Erro de permissão
  if (status === 403) {
    return new ApiError(
      data?.error || 'Você não tem permissão para acessar este recurso',
      status,
      'FORBIDDEN',
      data
    );
  }

  // Erro de validação
  if (status === 400) {
    return new ValidationError(data?.error || 'Dados inválidos', data);
  }

  // Erro genérico
  return new ApiError(
    data?.error || data?.message || 'Erro ao processar requisição',
    status,
    data?.code,
    data
  );
}
