from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view,  permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from perfil.models import ProfileImage
from rest_framework.decorators import action

@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({'error': 'Usuário e senha são obrigatórios'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = authenticate(username=username, password=password)
    
    if user is not None:
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(user)
        return Response({'token': token.key, 'user':serializer.data}, status=status.HTTP_200_OK)
    return Response({'error': 'Credenciais inválidas'}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    
    if not username or not password or not email:
        return Response({'error': 'Usuário, senha e e-mail são obrigatórios'}, status=status.HTTP_400_BAD_REQUEST)
    
    if User.objects.filter(username=username).exists():
        return Response({'error': 'Usuário já cadastrado'}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username=username, password=password, email=email)
    ProfileImage.objects.create(user=user)
    serializer = UserSerializer(user)
    
    return Response(serializer.data, status=status.HTTP_201_CREATED)

# Para visualização dos dados
@api_view(['GET'])
@permission_classes([AllowAny])
def list_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)  # Busca o usuário pelo ID
    except User.DoesNotExist:
        return Response({'error': 'Usuário não encontrado'}, status=status.HTTP_404_NOT_FOUND)
    
    serializer = UserSerializer(user)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_authenticated_user(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)

# Atualização desses dados
@api_view(['PUT'])
@permission_classes([AllowAny])
def update_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'error': 'Usuário não encontrado'}, status=status.HTTP_404_NOT_FOUND)

    serializer = UserSerializer(user, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([AllowAny])
def update_password(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'error': 'Usuário não encontrado'}, status=status.HTTP_404_NOT_FOUND)

    new_password = request.data.get('password')
    confirm_password = request.data.get('confirm_password')

    # if not old_password or not new_password or not confirm_password:
    #     return Response({'error': 'Senha antiga, nova senha e confirmação são obrigatórios'}, status=status.HTTP_400_BAD_REQUEST)

    if new_password != confirm_password:
        return Response({'error': 'As senhas não coincidem'}, status=status.HTTP_400_BAD_REQUEST)

    # if not user.check_password(old_password):
    #     return Response({'error': 'Senha antiga incorreta'}, status=status.HTTP_400_BAD_REQUEST)

    user.set_password(new_password)
    user.save()
    return Response({'success': 'Senha atualizada com sucesso'})

@api_view(['POST'])
@permission_classes([AllowAny])
def logout_user(request):
    try:
        token = Token.objects.get(user=request.user)
        token.delete()
        return Response({"success": "Usuário deslogado com sucesso"}, status=status.HTTP_200_OK)
    except Token.DoesNotExist:
        return Response({"detail": "Usuário não está logado"}, status=status.HTTP_400_BAD_REQUEST)