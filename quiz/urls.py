from django.urls import include, path
from . import views


urlpatterns = [
    path('', views.login, name='login'),
    path('home_page', views.home_page, name='home_page'),
    path('quiz', views.quiz, name='quiz'),
    path('get_questions', views.get_questions, name='get_questions'),
    path('logout_user', views.logout_user, name='logout_user'),
]
