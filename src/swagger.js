import dotenv from 'dotenv';
dotenv.config();

const url = process.env.BASE_URL;

export default {
    "openapi": "3.0.0",
    "info": {
        "title": "CODE FOR ALL APIs",
        "description": "Documentation API using swagger",
        "version": "1.0.0"
    },
    "servers": [
        {
            "url": url,
            "description": "APIs dev"
        }  
    ],
    "paths": {
        "/auth/{username}/{password}":{
            "get":{
                "summary": "Login",
                "tags": ["Login"],
                "parameters": [
                    {
                        "name": "username",
                        "in": "path",
                        "description": "User Name",
                        "require": true
                    },
                    {
                        "name": "password",
                        "in": "path",
                        "description": "Your Password",
                        "require": true
                    }                    
                ],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "401": {
                        "description": "Usuário não autorizado"
                    }                    
                }                
            }
        },
        "/client": {
            "get": {
                "summary": "busca todos os clientes",
                "tags": ["Client"],
                "security": [{"bearerAuth": []}],
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "500": {
                        "description": "Server Error"
                    }                    
                }
            },
            "post": {
                "summary": "Insere um cliente",
                "tags": ["Client"],
                "security": [{"bearerAuth": []}],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/Client"
                            },
                            "examples": {
                                "client": {
                                    "value": {
                                        "name" : "Primeiro Cliente",
                                        "email" : "codeforall@teste.com",
                                        "telphone" : "19 3849 70 70"                                        
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "OK"
                    },
                    "500": {
                        "description": "Server Error"
                    }                    
                }
            }            
        }, 
    },
    "components": {
        "schemas": {
            "Client":{
                "type": "object",
                "properties": {
                    "name" : {"type": "string"},
                    "email" : {"type": "string"},
                    "telphone" : {"type": "string"}
                }
            }
        },
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT"
            }
        }
    }
}