from django.urls import path
from . import views

urlpatterns = [
    path('patient/createpatient/',views.PatientListCreate.as_view(),name="patientcreate"),
    path('patient/listpatients/',views.PatientList.as_view(),name="patientlist"),
    path('patient/deletepatients/<int:pk>/',views.patientDelete.as_view(),name="patientdelete"),
    path('admistrator/createadmin/',views.AdministrationCreate.as_view(),name="admincreate"),
    path('admistrator/listadmin/',views.AdministrationList.as_view(),name="adminlist"),
    path('admistrator/deleteadmin/<int:pk>/',views.AdministrationDelete.as_view(),name="admindelete"),
    
    # path('api/package/<int:pk>/delete/', PackageDetailsDelete.as_view(), name='package-delete'),
]