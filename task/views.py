from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.views.generic import ListView
from .models import Person
from .forms import PersonForm

class PersonListView(ListView):
    model = Person
    template_name = 'task/home.html'
    context_object_name = 'users'
    ordering = ['-created']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['form'] = PersonForm()
        context['loggedIn'] = self.request.user
        return context
    
    def post(self, request, *args, **kwargs): 
        user_key = request.POST.get('user_key')
        del_key = request.POST.get('del_key')

        if user_key:
            person = get_object_or_404(Person, id=user_key)
            form = PersonForm(request.POST, instance=person) 
        elif del_key:
            person = get_object_or_404(Person, id=del_key)
            person.delete()
            messages.success(request, 'Member successfully deleted!')
            return redirect('home')
        else:
            form = PersonForm(request.POST)

        if form.is_valid():
            form.save()
            if user_key:
                messages.success(request, 'Member successfully updated!')
            else:
                messages.success(request, 'Member successfully added!')
            return redirect('home')
           

        context = self.get_context_data()
        context['form'] = form  
        return self.render_to_response(context)
