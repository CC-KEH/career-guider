from django.shortcuts import render
from django.contrib.auth import get_user_model, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserRegisterSerializer, UserLoginSerializer, UserSerializer,UserProfileSerializer
from rest_framework import permissions, status
from .validations import custom_validation, validate_email, validate_password
from django.http import HttpResponse,JsonResponse
from .models import UserProfile
# from .bard import Ai
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
import time

class UserRegister(APIView):
	permission_classes = (permissions.AllowAny,)
	def post(self, request):
		clean_data = custom_validation(request.data)
		serializer = UserRegisterSerializer(data=clean_data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.create(clean_data)
			if user:
				return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = (SessionAuthentication,)
	##
	def post(self, request):
		data = request.data
		assert validate_email(data)
		assert validate_password(data)
		serializer = UserLoginSerializer(data=data)
		if serializer.is_valid(raise_exception=True):
			user = serializer.check_user(data)
			login(request, user)
			return Response(serializer.data, status=status.HTTP_200_OK)


class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)


class UserView(APIView):
	permission_classes = (permissions.IsAuthenticated,)
	authentication_classes = (SessionAuthentication,)
	##
	def get(self, request):
		serializer = UserSerializer(request.user)
		return Response({'user': serializer.data}, status=status.HTTP_200_OK)


# def UserView(request):
# 	# Get all the users
# 	users = UserProfile.objects.all()
# 	# Serialize the data
# 	serializer = UserProfileSerializer(users, many=True)
# 	# Return Json Response
# 	return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'POST'])
@permission_classes([AllowAny]) 
def UserProfileView(request):
    if request.method == 'GET':
        users = UserProfile.objects.all()
        serializer = UserProfileSerializer(users, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # bard = Ai()
            # roadmap = bard.bard(question="Give the roadmap for this scenario " + serializer.data)
            time.sleep(5)
            roadmap = "This is the roadmap for this scenario"
            # summary = bard.bard(question="Give the summary about this user" + serializer.data)
            summary = "This is the summary of this user"
            response_data = {
            "roadmap": roadmap,
            "summary": summary,
        	}
            return JsonResponse(response_data)
        return JsonResponse({"error": "Invalid request"})
