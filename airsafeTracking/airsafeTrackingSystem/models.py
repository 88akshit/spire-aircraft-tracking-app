from django.db import models

# Model used to store timestamp , icao_address, latitude , longitude
class Aircraft(models.Model):
    time_stamp = models.DateTimeField()
    name = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits = 8,
                         decimal_places = 6)
    lon = models.DecimalField(max_digits = 8,
                         decimal_places = 6)

