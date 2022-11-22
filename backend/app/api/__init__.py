from .space_router import create_space, read_spaces, delete_space, add_user_to_space
from .user_router import user_registration, login_for_access_token, read_users_me
from .module_router import create_space_modules, read_modules, delete_module
from .blocks_router import create_module_text_materials, create_module_video_materials, \
    delete_text_material, delete_video_material
