from django.contrib import admin
from .models import PatientDetails,Administration,PackageDetails,Reviews

admin.site.register(PatientDetails)
admin.site.register(Administration)
admin.site.register(PackageDetails)
admin.site.register(Reviews)
# Register your models here.
