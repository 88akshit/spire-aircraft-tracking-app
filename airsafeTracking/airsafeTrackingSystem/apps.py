from django.apps import AppConfig
from django.core.cache import caches 
class AirsafetrackingsystemConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'airsafeTrackingSystem'
    def ready(self):
        # Cache default values while start of the application
        m_cache = caches.all()[0]
        m_cache.set("update_avaiable",False,9000)
        m_cache.set("last_time_updated",'',9000)
        m_cache.set("position_token",'',9000)


