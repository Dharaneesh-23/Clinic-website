from django.db import models
from django.contrib.auth.hashers import make_password,check_password
from datetime import date

# Create your models here.
class PatientDetails(models.Model):
    fname = models.CharField(max_length = 30)
    lname = models.CharField(max_length = 30)
    contact = models.CharField(max_length = 14)
    mailid = models.CharField(max_length = 50)
    address = models.TextField()
    appointmentdate = models.DateField(default = date.today)
    appointmenttime = models.TimeField()
    servicetype = models.CharField(default = "Medical Treatment",max_length = 30)

    def __str__(self) :
        return self.fname,self.lname,self.contact,self.mailid,self.address,self.appointmentdate,self.servicetype
    
class Administration(models.Model):
    username = models.CharField(max_length = 30)
    password = models.CharField(max_length = 30)
    privilege = models.BooleanField()
    mailid = models.CharField(max_length = 50)
    
    def __str__(self):
        return self.username,self.privilege,self.mailid
    
class PackageDetails(models.Model):
    title1 = models.CharField(max_length = 50)
    title2 = models.CharField(max_length = 50)
    content = models.TextField(max_length = 200)
    img1 = models.ImageField(upload_to='rectangle_image')
    img2 = models.ImageField(upload_to='round_image')
    c1 = models.CharField(max_length = 30)
    c2 = models.CharField(max_length = 30)
    c3 = models.CharField(max_length = 30)

class Reviews(models.Model):
    name = models.CharField(max_length = 50)
    phnumber = models.CharField(max_length = 14)
    mailid = models.CharField(max_length = 50)
    
    
