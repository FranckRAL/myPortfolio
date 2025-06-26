from django.db import models

class Technology(models.Model):
    name = models.CharField(max_length=50, unique=True)
    
    class Meta:
        verbose_name_plural = 'Technologies'

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technologies = models.ManyToManyField(Technology, related_name="projects")
    url = models.URLField(blank=True)
    image = models.ImageField(upload_to="images/projects/", blank=True, null=True)

    def __str__(self):
        return self.title

class Visitor(models.Model):
    ip_address = models.GenericIPAddressField()
    user_agent = models.CharField(max_length=256)
    visit_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.ip_address} at {self.visit_time}"

class Message(models.Model):
    email = models.EmailField()
    subject = models.CharField(max_length=150)
    content = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.email} - {self.subject}"
    
class Service(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/services')
    
    def __str__(self):
        return f"service: {self.title}"