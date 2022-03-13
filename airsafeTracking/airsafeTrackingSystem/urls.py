from airsafeTrackingSystem import views
from django.urls import include, path

from rest_framework import routers


router = routers.DefaultRouter()

urlpatterns = [
   path('', include(router.urls)),
   path('aircrafts', views.get_aircraft_targets)
]