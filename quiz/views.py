from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.contrib.auth import authenticate, logout
from django.contrib.auth import login as auth_login
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect
import json as js
from django.core.serializers.json import DjangoJSONEncoder
from quiz import queries as queries
import random
# Create your views here.

def login(request):
	if request.method == "GET":
		if request.user.is_authenticated:
			return redirect(home_page)
		else:
			return render(request, 'quiz/login.html', {'error': ''})
	else: 
		user = request.POST.get('user')
		pwd = request.POST.get('pwd')
		user = authenticate(request, username=user, password=pwd)
		if user is not None:
			auth_login(request, user)			
			return redirect(home_page)
		else:
			return render(request, 'quiz/login.html', {'error': 'Invalid credentials. Try again.'})

def home_page(request):
	return render(request, 'quiz/home.html', {'error': 'Invalid credentials. Try again.'})	
   

def quiz(request):
	subject = request.GET.get('subject')
	return render(request, 'quiz/quiz.html', {'subject' : subject})	

def get_questions(request):
	subject = request.GET.get('subject')
	question_type = request.GET.get('question_type')
	multiple_choice = sorted(queries.get_questions(subject, question_type), key=lambda k: random.random())
	json = js.dumps(list(multiple_choice), cls=DjangoJSONEncoder)
	return HttpResponse(json, content_type='application/json')

def logout_user(request):
    logout(request)
    return redirect(login)
