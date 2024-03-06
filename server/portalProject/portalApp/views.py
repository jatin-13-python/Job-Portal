from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate, login
from .serializers import AdminLoginSerializer
from django.http import JsonResponse
from .models import User, Profile, Seeker, Role, Recruiter
from django.db import IntegrityError



def homePage(request):
    context = {}
    return render(request, "basicApp/home.html", context)


def registerPage(request):
    context = {}
    return render(request, "basicApp/register.html", context)


def loginPage(request):
    context = {}
    return render(request, "basicApp/login.html", context)


def companyRegisterPage(request):
    context = {}
    return render(request, "basicApp/register_as_company.html", context)


def seekerRegisterPage(request):
    context = {}
    return render(request, "basicApp/register_as_seeker.html", context)


@api_view(["POST"])
@permission_classes([AllowAny])
def admin_login(request):
    data = request.data

    username = data.get("username", "")
    password = data.get("password", "")

    # Authenticate the user
    user = authenticate(request, username=username, password=password)

    if user is not None:
        # If authentication is successful, log in the user
        login(request, user)
        return JsonResponse({"message": "Login successful"}, status=200)
    else:
        # If authentication fails, return an error message
        return JsonResponse(
            {"message": "Email id does not exist or password is incorrect"}, status=400
        )


@api_view(["POST"])
@permission_classes([AllowAny])
def seekerRegistration(request):
    try:
        # Extracting data from request
        seeker_data = {
            "name": request.data.get("fullName", ""),
            "email": request.data.get("email", ""),
            "phone": request.data.get("mobileNumber", ""),
            "work_status": request.data.get("workStatus", ""),
        }

        # File handling
        resume_file = request.data.get("resume", None)

        # Create a new User instance
        user_data = {
            "username": seeker_data["email"],
            "email": seeker_data["email"],
            "password": "Password@123",
        }

        user = User.objects.create_user(**user_data)

        # Create a new Role instance or get an existing one
        role_name = "seeker"
        role, created = Role.objects.get_or_create(name=role_name)

        # Create a new Profile instance for the user and assign the seeker role
        profile = Profile.objects.create(user=user)
        profile.roles.add(role)

        # Create a new Seeker instance associated with the user
        seeker = Seeker.objects.create(user=profile, **seeker_data)

        # Save the resume file if provided
        if resume_file:
            seeker.resume = resume_file
            seeker.save()

        return Response({"message": "Seeker registration successful"}, status=201)
    except Exception as e:
        return Response({"error": str(e)}, status=400)



@api_view(["POST"])
@permission_classes([AllowAny])
def companyRegistration(request):
    # Extracting data from the request
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')
    company = request.data.get('company', 'Company')  # Set default value to 'Company'
    phone = request.data.get('phone', '9876543210')

    # Check if the 'recruiter' role exists, create if not
    recruiter_role, created = Role.objects.get_or_create(name='recruiter')

    try:
        # Generate a unique username based on the email
        username = email.split('@')[0]  # You can customize this logic based on your requirements

        # Creating a new User instance with a unique username
        user = User.objects.create_user(username=username, email=email, password=password)

        # Creating a new Profile instance with the 'recruiter' role
        profile = Profile.objects.create(user=user)
        profile.roles.add(recruiter_role)

        # Creating a new Recruiter instance with the 'company' field set
        recruiter = Recruiter.objects.create(user=profile, name=name, email=email, company=company, phone=phone)

        # Return a success response
        return Response({"message": "Recruiter created successfully"})

    except IntegrityError as e:
        # Handling the case where the username is not unique
        return Response({"error": "Username already exists. Please choose a different email address."}, status=400)
