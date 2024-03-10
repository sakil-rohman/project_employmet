from django.shortcuts import render, HttpResponse
import os
from django.views.generic import View
from django.conf import settings
from django.http import HttpResponseNotFound
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.http import FileResponse
import mimetypes


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class MyAppIndexView(View):
    def get(self, request, *args, **kwargs):
        try:
            with open(os.path.join(settings.BASE_DIR, "myapp/build/index.html"), 'r') as file:
                return HttpResponse(file.read())
        except FileNotFoundError:
            return HttpResponseNotFound()
        
class MyAppIndexViewVendor(View):
    def get(self, request, *args, **kwargs):
        try:
            # Construct path to vendor directory in build folder
            vendor_path = os.path.join(settings.BASE_DIR, "myapp/build/vendor")

            # Get the requested file path from the URL
            requested_file = kwargs.get("file_path")

            # Construct full path to the requested file
            file_path = os.path.join(vendor_path, requested_file)

            # Check if the requested file exists
            if os.path.exists(file_path):
                # Read the file and return its content
                content_type, _ = mimetypes.guess_type(file_path)
                response = FileResponse(open(file_path, 'rb'), content_type=content_type)
                return response
            else:
                # If the file does not exist, return 404
                return HttpResponseNotFound()
        except FileNotFoundError:
            return HttpResponseNotFound()

class CMSIndexView(View):
    def get(self, request, *args, **kwargs):
        try:
            with open(os.path.join(settings.BASE_DIR, "cms2/build/index.html"), 'r') as file:
                return HttpResponse(file.read())
        except FileNotFoundError:
            return HttpResponseNotFound()
