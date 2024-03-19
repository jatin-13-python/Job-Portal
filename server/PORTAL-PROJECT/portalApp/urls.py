from . import views
from django.urls import path


urlpatterns = [
    path("", views.homePage, name="home"),
    path("register/", views.registerPage, name="register"),
    path("login/", views.loginPage, name="login"),
    path("company-register/", views.companyRegisterPage, name=" company register "),
    path("seeker-register/", views.seekerRegisterPage, name=" seeker register "),
    path("login/admin-login/", views.admin_login, name="admin-login"),
    path(
        "seeker-register/register-seeker/",
        views.seekerRegistration,
        name="seeker-register",
    ),
    path(
        "company-register/register-company/",
        views.companyRegistration,
        name="company-register",
    ),
]
