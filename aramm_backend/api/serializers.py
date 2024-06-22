# from rest_framework import serializers
# from .models import *

# class patientSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PatientDetails
#         fields = ['fname','lname','contact','mailid','address']

from django.contrib.auth.models import User
from rest_framework import serializers
from .models import PatientDetails,Reviews,PackageDetails,Administration

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","password"]
        extra_kwargs = {"password": {"write_only":True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    
class TimeslotSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDetails
        fields = ['appointmenttime']

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientDetails
        fields = ["id","fname","lname","contact","mailid","address","appointmentdate","servicetype","appointmenttime"]
        extra_kwargs = {"id":{"read_only":True}}

class ReviewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reviews
        fields = ['id','name','phnumber','mailid']
        extra_kwargs = {"id":{"read_only":True}}

class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageDetails
        fields = ['id','title1','title2','content','img1','img2','c1','c2','c3']
        extra_kwargs = {"id":{"read_only":True}}

class PackageNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = PackageDetails
        fields = ['title1']

class AdminstrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Administration
        fields = ['id','username','password','privilege','mailid']
        extra_kwargs = {"id":{"read_only":True}}