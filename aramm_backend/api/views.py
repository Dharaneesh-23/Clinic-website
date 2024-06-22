from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics,views
from .serializers import UserSerializer,PatientSerializer,AdminstrationSerializer,PackageSerializer,ReviewsSerializer,LoginSerializer,TimeslotSerializer,PackageNameSerializer
from rest_framework.permissions import IsAuthenticated,AllowAny
from .models import PatientDetails,Administration,PackageDetails,Reviews
from django.contrib.auth.hashers import check_password
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser,FormParser


#Create VIews here

class TimeSlot(generics.ListAPIView):
    serializer_class = TimeslotSerializer
    permission_classes = [AllowAny]
    def get_queryset(self):
        date = self.request.query_params.get('date', None)
        if date:
            # print(date)
            return PatientDetails.objects.filter(appointmentdate=date)
        else:
            return PatientDetails.objects.none()  # or return default queryset

class PatientList(generics.ListAPIView):
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]
    queryset = PatientDetails.objects.all()

class PatientListCreate(generics.CreateAPIView):
    # queryset = PatientDetails.objects.all()
    # serializer_class = PatientSerializer
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]
    queryset = PatientDetails.objects.all()

    # def get_queryset(self):
    #     user = self.request.user
    #     # return PatientDetails.objects.filter(author=user)   #only when the user is specified
    #     return PatientDetails.objects.all()
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class patientDelete(generics.DestroyAPIView):
    serializer_class = PatientSerializer
    permission_classes = [AllowAny]
    # queryset = PatientDetails.objects.all()

    def get_queryset(self):
        return PatientDetails.objects.all()

class AdministrationCreate(generics.CreateAPIView):
    serializer_class = AdminstrationSerializer
    permission_classes = [AllowAny]
    queryset = Administration.objects.all()

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class AdministrationList(generics.ListAPIView):
    serializer_class = AdminstrationSerializer
    permission_classes = [AllowAny]
    queryset = Administration.objects.all()

class AdministrationDelete(generics.DestroyAPIView):
    serializer_class = AdminstrationSerializer
    permission_classes = [AllowAny]
    # queryset = Administration.objects.all()

    def get_queryset(self):
        return Administration.objects.all()

class PackageList(generics.ListAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

class PackageCreate(generics.CreateAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)

class PackageDelete(generics.DestroyAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

    def get_queryset(self):
        return super().get_queryset()

class PackageUpdate(generics.UpdateAPIView):
    serializer_class = PackageSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

    def get_queryset(self):
        return super().get_queryset()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class ListPackagenames(generics.ListAPIView):
    serializer_class = PackageNameSerializer
    permission_classes = [AllowAny]
    queryset = PackageDetails.objects.all()

# class PatientRetrieve(generics.RetrieveAPIView):
#     queryset = PatientDetails.objects.all()
#     serializer_class = PatientSerializer
#     permission_classes = [AllowAny]

# class patientDelete(generics.DestroyAPIView):
#     serializer_class = PatientSerializer
#     permission_classes = [IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return PatientDetails.objects.all()






















# from django.shortcuts import render
# from rest_framework.views import APIView
# from .models import *
# from .serializers import *
# from rest_framework.response import Response


# # Create your views here.


# class ReactView(APIView):
#     def get(self,request):
#         output = [{"fname":i.fname,
#                     "lname":i.lname,
#                     "contact":i.contact,
#                     "mailid":i.mailid,
#                     "address":i.address}for i in PatientDetails.objects.all()]
#         return Response(output)
    
#     def post(self,request):
#         serializer = patientSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)