from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Person

class PersonForm(forms.ModelForm):
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter email'
        })
    )

    class Meta:
        model = Person
        fields = ['name', 'username', 'email']
       
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control',
                                           'placeholder': 'Enter Full Name'}),
            'username': forms.TextInput(attrs={'class': 'form-control',
                                               'placeholder': 'Enter username'}),
            
        }
        labels = {
            'name': 'Full Name',  
            'username': 'Username',
            'email': 'Email Address',
        }


