from django.contrib import admin
from .models import Role, Profile, Admin, Recruiter, Seeker

admin.site.register(Role)
admin.site.register(Profile)
admin.site.register(Admin)
admin.site.register(Recruiter)
admin.site.register(Seeker)
