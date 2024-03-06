from django.db import models
from django.contrib.auth.models import User


class Role(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Profile(models.Model):
    user_types = [
        ("admin", "admin"),
        ("recruiter", "recruiter"),
        ("seeker", "seeker"),
    ]
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    roles = models.ManyToManyField(Role)

    def __str__(self):
        return self.user.username


class Admin(models.Model):
    user = models.OneToOneField(Profile, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Recruiter(models.Model):
    user = models.OneToOneField(Profile, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    company = models.CharField(max_length=200)
    phone = models.CharField(max_length=25)

    def __str__(self):
        return self.name


class Seeker(models.Model):
    STATUS_CHOICES = (
        ("fresher", "Fresher"),
        ("experienced", "Experienced"),
    )
    user = models.OneToOneField(Profile, on_delete=models.CASCADE, blank=True)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=25)
    work_status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    resume = models.FileField(
        upload_to="pdf_files",
        blank=True,
    )

    def __str__(self):
        return self.name
