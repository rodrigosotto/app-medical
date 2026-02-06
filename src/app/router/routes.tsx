import { createRootRoute, createRoute, Outlet } from '@tanstack/react-router';

// Auth
import { LoginForm } from '@/features/auth/components/LoginForm';
import { RegisterForm } from '@/features/auth/components/RegisterForm';
import { ForgotPasswordForm } from '@/features/auth/components/ForgotPasswordForm';
import { EmailVerification } from '@/features/auth/pages/EmailVerification';
import { DoctorRegistrationPage } from '@/features/auth/pages/DoctorRegistrationPage';
import { PatientRegistrationPage } from '@/features/auth/pages/PatientRegistrationPage';

// Patient
import { PatientDashboard } from '@/features/patient/pages/PatientDashboard';
import { MyAppointments } from '@/features/patient/pages/MyAppointments';
import { AppointmentDetails } from '@/features/patient/pages/AppointmentDetails';
import { AppointmentBooking } from '@/features/patient/pages/AppointmentBooking';
import { MedicalHistory } from '@/features/patient/pages/MedicalHistory';
import { PrescriptionsList } from '@/features/patient/pages/PrescriptionsList';
import { PrescriptionDetail } from '@/features/patient/pages/PrescriptionDetail';
import { ExamsRepository } from '@/features/patient/pages/ExamsRepository';
import { ExamViewer } from '@/features/patient/pages/ExamViewer';
import { UploadExam } from '@/features/patient/pages/UploadExam';
import { TreatmentProgress } from '@/features/patient/pages/TreatmentProgress';
import { VideoConsultation } from '@/features/patient/pages/VideoConsultation';
import { ChatWithDoctor } from '@/features/patient/pages/ChatWithDoctor';
import { PatientProfile } from '@/features/patient/pages/PatientProfile';
import { PurchaseHistory } from '@/features/patient/pages/PurchaseHistory';
import { BlogArticles } from '@/features/patient/pages/BlogArticles';
import { BlogArticle } from '@/features/patient/pages/BlogArticle';

// Doctor
import { DoctorDashboard } from '@/features/doctor/pages/DoctorDashboard';
import { ConsultationsList } from '@/features/doctor/pages/ConsultationsList';
import { ConsultationDetails } from '@/features/doctor/pages/ConsultationDetails';
import { PatientFile } from '@/features/doctor/pages/PatientFile';
import { PatientHistoryTimeline } from '@/features/doctor/pages/PatientHistoryTimeline';
import { PatientExamsViewer } from '@/features/doctor/pages/PatientExamsViewer';
import { DoctorVideoRoom } from '@/features/doctor/pages/DoctorVideoRoom';
import { CreatePrescription } from '@/features/doctor/pages/CreatePrescription';
import { PrescriptionManagement } from '@/features/doctor/pages/PrescriptionManagement';
import { MySchedule } from '@/features/doctor/pages/MySchedule';
import { AvailabilitySettings } from '@/features/doctor/pages/AvailabilitySettings';
import { ReportsStatistics } from '@/features/doctor/pages/ReportsStatistics';
import { CreateBlogPost } from '@/features/doctor/pages/CreateBlogPost';
import { BlogPostsManagement } from '@/features/doctor/pages/BlogPostsManagement';
import { MedicationRegistration } from '@/features/doctor/pages/MedicationRegistration';
import { DoctorProfile } from '@/features/doctor/pages/DoctorProfile';

// Admin
import { AdminDashboard } from '@/features/admin/pages/AdminDashboard';
import { UsersManagement } from '@/features/admin/pages/UsersManagement';
import { UserDetail } from '@/features/admin/pages/UserDetail';
import { DoctorsApproval } from '@/features/admin/pages/DoctorsApproval';
import { FinancialReports } from '@/features/admin/pages/FinancialReports';
import { OperationalReports } from '@/features/admin/pages/OperationalReports';
import { ProductManagement } from '@/features/admin/pages/ProductManagement';
import { AddEditProduct } from '@/features/admin/pages/AddEditProduct';
import { InventoryManagement } from '@/features/admin/pages/InventoryManagement';
import { OrdersManagement } from '@/features/admin/pages/OrdersManagement';
import { SystemSettings } from '@/features/admin/pages/SystemSettings';
import { PermissionsControl } from '@/features/admin/pages/PermissionsControl';
import { ActivityLogs } from '@/features/admin/pages/ActivityLogs';
import { SpecialtiesManagement } from '@/features/admin/pages/SpecialtiesManagement';
import { MedicationsDatabase } from '@/features/admin/pages/MedicationsDatabase';

// E-commerce
import { ProductCatalog } from '@/features/ecommerce/pages/ProductCatalog';
import { ProductDetail } from '@/features/ecommerce/pages/ProductDetail';
import { ShoppingCart } from '@/features/ecommerce/pages/ShoppingCart';
import { Checkout } from '@/features/ecommerce/pages/Checkout';
import { OrderConfirmation } from '@/features/ecommerce/pages/OrderConfirmation';
import { OrderTracking } from '@/features/ecommerce/pages/OrderTracking';
import { MyOrders } from '@/features/ecommerce/pages/MyOrders';
import { OrderDetails } from '@/features/ecommerce/pages/OrderDetails';

// ─── Root ────────────────────────────────────────────────────────────────────

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// ─── Rotas Públicas ──────────────────────────────────────────────────────────

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Página Inicial MEDICAL APLICATIVO</div>,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: LoginForm,
});

const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register',
  component: RegisterForm,
});

const forgotPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forgot-password',
  component: ForgotPasswordForm,
});

// ─── Rotas de Autenticação ───────────────────────────────────────────────────

const verifyEmailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/verify-email',
  component: EmailVerification,
});

const doctorRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/doctor',
  component: DoctorRegistrationPage,
});

const patientRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/patient',
  component: PatientRegistrationPage,
});

// ─── Rotas do Paciente ───────────────────────────────────────────────────────

const patientDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/dashboard',
  component: PatientDashboard,
});

const patientAppointmentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/appointments',
  component: MyAppointments,
});

const patientAppointmentDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/appointments/$id',
  component: AppointmentDetails,
});

const patientAppointmentBookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/appointment-booking',
  component: AppointmentBooking,
});

const patientMedicalHistoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/medical-history',
  component: MedicalHistory,
});

const patientPrescriptionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/prescriptions',
  component: PrescriptionsList,
});

const patientPrescriptionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/prescriptions/$id',
  component: PrescriptionDetail,
});

const patientExamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/exams',
  component: ExamsRepository,
});

const patientExamViewerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/exams/$id',
  component: ExamViewer,
});

const patientUploadExamRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/upload-exam',
  component: UploadExam,
});

const patientTreatmentProgressRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/treatment-progress',
  component: TreatmentProgress,
});

const patientVideoConsultationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/video-consultation',
  component: VideoConsultation,
});

const patientChatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/chat',
  component: ChatWithDoctor,
});

const patientProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/profile',
  component: PatientProfile,
});

const patientOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/orders',
  component: PurchaseHistory,
});

const patientBlogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/blog',
  component: BlogArticles,
});

const patientBlogArticleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/patient/blog/$id',
  component: BlogArticle,
});

// ─── Rotas do Médico ─────────────────────────────────────────────────────────

const doctorDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/dashboard',
  component: DoctorDashboard,
});

const doctorConsultationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/consultations',
  component: ConsultationsList,
});

const doctorConsultationDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/consultations/$id',
  component: ConsultationDetails,
});

const doctorPatientFileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/patients/$id/file',
  component: PatientFile,
});

const doctorPatientHistoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/patients/$id/history',
  component: PatientHistoryTimeline,
});

const doctorPatientExamsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/patients/$id/exams',
  component: PatientExamsViewer,
});

const doctorVideoRoomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/video-room',
  component: DoctorVideoRoom,
});

const doctorPrescriptionsCreateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/prescriptions/create',
  component: CreatePrescription,
});

const doctorPrescriptionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/prescriptions',
  component: PrescriptionManagement,
});

const doctorPrescriptionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/prescriptions/$id',
  component: PrescriptionManagement,
});

const doctorScheduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/schedule',
  component: MySchedule,
});

const doctorAvailabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/availability',
  component: AvailabilitySettings,
});

const doctorReportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/reports',
  component: ReportsStatistics,
});

const doctorBlogCreateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/blog/create',
  component: CreateBlogPost,
});

const doctorBlogManagementRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/blog',
  component: BlogPostsManagement,
});

const doctorMedicationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/medications',
  component: MedicationRegistration,
});

const doctorProfileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctor/profile',
  component: DoctorProfile,
});

// ─── Rotas do Admin ──────────────────────────────────────────────────────────

const adminDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/dashboard',
  component: AdminDashboard,
});

const adminUsersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/users',
  component: UsersManagement,
});

const adminUserDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/users/$id',
  component: UserDetail,
});

const adminDoctorsApprovalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/doctors-approval',
  component: DoctorsApproval,
});

const adminFinancialReportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/reports/financial',
  component: FinancialReports,
});

const adminOperationalReportsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/reports/operational',
  component: OperationalReports,
});

const adminProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/products',
  component: ProductManagement,
});

const adminProductsAddRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/products/add',
  component: AddEditProduct,
});

const adminProductsEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/products/$id/edit',
  component: AddEditProduct,
});

const adminInventoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/inventory',
  component: InventoryManagement,
});

const adminOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/orders',
  component: OrdersManagement,
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/settings',
  component: SystemSettings,
});

const adminPermissionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/permissions',
  component: PermissionsControl,
});

const adminLogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/logs',
  component: ActivityLogs,
});

const adminSpecialtiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/specialties',
  component: SpecialtiesManagement,
});

const adminMedicationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin/medications',
  component: MedicationsDatabase,
});

// ─── Rotas do E-commerce ─────────────────────────────────────────────────────

const ecommerceProductsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/products',
  component: ProductCatalog,
});

const ecommerceProductDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/products/$id',
  component: ProductDetail,
});

const ecommerceCartRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/cart',
  component: ShoppingCart,
});

const ecommerceCheckoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/checkout',
  component: Checkout,
});

const ecommerceOrderConfirmationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/order-confirmation',
  component: OrderConfirmation,
});

const ecommerceOrderTrackingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/orders/$id/tracking',
  component: OrderTracking,
});

const ecommerceOrdersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/orders',
  component: MyOrders,
});

const ecommerceOrderDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ecommerce/orders/$orderId',
  component: OrderDetails,
});

// ─── Árvore de Rotas ─────────────────────────────────────────────────────────

export const routeTree = rootRoute.addChildren([
  // Públicas
  indexRoute,
  loginRoute,
  registerRoute,
  forgotPasswordRoute,

  // Autenticação
  verifyEmailRoute,
  doctorRegistrationRoute,
  patientRegistrationRoute,

  // Paciente
  patientDashboardRoute,
  patientAppointmentsRoute,
  patientAppointmentDetailsRoute,
  patientAppointmentBookingRoute,
  patientMedicalHistoryRoute,
  patientPrescriptionsRoute,
  patientPrescriptionDetailRoute,
  patientExamsRoute,
  patientExamViewerRoute,
  patientUploadExamRoute,
  patientTreatmentProgressRoute,
  patientVideoConsultationRoute,
  patientChatRoute,
  patientProfileRoute,
  patientOrdersRoute,
  patientBlogRoute,
  patientBlogArticleRoute,

  // Médico
  doctorDashboardRoute,
  doctorConsultationsRoute,
  doctorConsultationDetailsRoute,
  doctorPatientFileRoute,
  doctorPatientHistoryRoute,
  doctorPatientExamsRoute,
  doctorVideoRoomRoute,
  doctorPrescriptionsCreateRoute,
  doctorPrescriptionsRoute,
  doctorPrescriptionDetailRoute,
  doctorScheduleRoute,
  doctorAvailabilityRoute,
  doctorReportsRoute,
  doctorBlogCreateRoute,
  doctorBlogManagementRoute,
  doctorMedicationsRoute,
  doctorProfileRoute,

  // Admin
  adminDashboardRoute,
  adminUsersRoute,
  adminUserDetailRoute,
  adminDoctorsApprovalRoute,
  adminFinancialReportsRoute,
  adminOperationalReportsRoute,
  adminProductsRoute,
  adminProductsAddRoute,
  adminProductsEditRoute,
  adminInventoryRoute,
  adminOrdersRoute,
  adminSettingsRoute,
  adminPermissionsRoute,
  adminLogsRoute,
  adminSpecialtiesRoute,
  adminMedicationsRoute,

  // E-commerce
  ecommerceProductsRoute,
  ecommerceProductDetailRoute,
  ecommerceCartRoute,
  ecommerceCheckoutRoute,
  ecommerceOrderConfirmationRoute,
  ecommerceOrderTrackingRoute,
  ecommerceOrdersRoute,
  ecommerceOrderDetailRoute,
]);
