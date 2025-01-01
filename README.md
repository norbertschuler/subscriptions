This is an example in **German language** of a simple app managing subscriptions. It is composed of a Django Rest API and a Next.js frontend and the code is mostly generated with ChatGPT from https://chatgpt.com/share/6775889c-50d4-8009-afdd-5299e1caa95f with some smaller modifications. Some code got initially created in a ChatGPT canvas and then modified with some further prompts which is not visible in the shared link.

It took only a few minutes to generate the code and it is a good starting point for a simple app. It should demonstrate how easy it is to generate code with ChatGPT. But you should know the tools for e.g. Django and Next.js to be able to fix issues and extend the code.

# Command to init and start the Django backend

Depending on your local Python setup you might need to use `python` or `python3` and `pip` or `pip3`.

    python3 -m venv subscriptions-env
    source subscriptions-env/bin/activate
    pip3 install django djangorestframework django-cors-headers

    cd subscriptions
    ./manage.py makemigrations
    ./manage.py migrate
    ./manage.py runserver

# Commands to init and start Next.js frontend

    cd subscriptions-frontend
    npm install
    npm run dev
