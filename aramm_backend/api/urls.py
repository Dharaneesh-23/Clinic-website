from django.urls import path
from . import views

urlpatterns = [
    path('patient/createpatient/',views.PatientListCreate.as_view(),name="patientcreate"),
    path('patient/listpatients/',views.PatientList.as_view(),name="patientlist"),
    path('patient/deletepatients/<int:pk>/',views.patientDelete.as_view(),name="patientdelete"),
    path('admistrator/createadmin/',views.AdministrationCreate.as_view(),name="admincreate"),
    path('admistrator/listadmin/',views.AdministrationList.as_view(),name="adminlist"),
    path('admistrator/deleteadmin/<int:pk>/',views.AdministrationDelete.as_view(),name="admindelete"),
    path('patient/listappointment/',views.TimeSlot.as_view(),name="appointmenttime"),
    path('package/createpackage/',views.PackageCreate.as_view(),name="packagecreate"),
    path('package/listpackage/',views.PackageList.as_view(),name="packagelist"),
    path('package/deletepackage/<int:pk>/',views.PackageDelete.as_view(),name="deletepackage"),
    path('package/updatepackage/<int:pk>/',views.PackageUpdate.as_view(),name="updatepackage"),
    path('package/listpackagenames/',views.ListPackagenames.as_view(),name="packagenamelist"),
    
    # path('api/package/<int:pk>/delete/', PackageDetailsDelete.as_view(), name='package-delete'),
]