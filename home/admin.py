from django.contrib import admin
from home.models import Messages
# Register your models here.

# @admin.register(Messages)
# class MessagesAdmin(admin.ModelAdmin):
#     fields = ('__all__', )

admin.site.register(Messages)