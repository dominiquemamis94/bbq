from django.urls import include, path
from . import views


urlpatterns = [
    path('', views.login, name='login'),
    path('home_page', views.home_page, name='home_page'),
    path('quiz', views.quiz, name='quiz'),
    path('results', views.results, name='results'),
    path('save_score', views.save_score, name='save_score'),
    path('get_desc_scores', views.get_desc_scores, name='get_desc_scores'),
    path('get_timeline', views.get_timeline, name='get_timeline'),
    path('get_questions', views.get_questions, name='get_questions'),
    path('logout_user', views.logout_user, name='logout_user'),
]
