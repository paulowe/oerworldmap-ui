import i18n from '../../src/i18n'

export default {
  config: {
    mapboxConfig: {
      token: 'MAPBOX_ACCESS_TOKEN',
      style: 'MAPBOX_STYLE',
      miniMapStyle: 'MAPBOX_MINIMAP_STYLE'
    },
    elasticsearchConfig: {
      index: 'elastic',
      url: 'https://example.org/'
    },
    apiConfig: {
      host: 'example.org',
      port: '443',
      scheme: 'https'
    }
  },
  i18n: i18n(['en'], {}),
  emitter: {
    on: (event, handler) => console.log("Registered", event, handler),
    off: (event, handler) => console.log("Unregistered", event, handler),
    emit: (event, payload) => console.log("Triggered", event, payload)
  },
  schema: {
    "id": "#",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "oneOf": [
      {
        "$ref": "#/definitions/Person"
      },
      {
        "$ref": "#/definitions/Organization"
      },
      {
        "$ref": "#/definitions/Service"
      },
      {
        "$ref": "#/definitions/Action"
      },
      {
        "$ref": "#/definitions/Concept"
      },
      {
        "$ref": "#/definitions/ConceptScheme"
      },
      {
        "$ref": "#/definitions/Article"
      },
      {
        "$ref": "#/definitions/Event"
      },
      {
        "$ref": "#/definitions/Product"
      },
      {
        "$ref": "#/definitions/WebPage"
      },
      {
        "$ref": "#/definitions/RegisterAction"
      },
      {
        "$ref": "#/definitions/LikeAction"
      },
      {
        "$ref": "#/definitions/LighthouseAction"
      }
    ],
    "definitions": {
      "RegisterAction": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "UserIndex.register.register",
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "UserIndex.register.placeholderName",
            "_display": {
              "placeholder": "UserIndex.register.placeholderName"
            }
          },
          "location": {
            "title": "UserIndex.register.placeholderCountry",
            "$ref": "#/definitions/Country"
          },
          "email": {
            "type": "string",
            "format": "email",
            "title": "UserIndex.register.placeholderEmail",
            "_display": {
              "placeholder": "UserIndex.register.placeholderEmail"
            }
          },
          "password": {
            "type": "string",
            "title": "UserIndex.register.choosePassword",
            "_display": {
              "type": "password",
              "placeholder": "UserIndex.register.choosePassword"
            }
          },
          "privacyAccepted": {
            "title": "UserIndex.register.agreePolicy",
            "type": "boolean"
          },
          "termsAccepted": {
            "title": "UserIndex.register.agreeService",
            "type": "boolean"
          },
          "publishEmail": {
            "title": "UserIndex.register.agreeEmail",
            "type": "boolean"
          },
          "subscribeNewsletter": {
            "title": "UserIndex.register.subscribe",
            "type": "boolean"
          }
        },
        "required": [
          "name",
          "location",
          "email",
          "password",
          "privacyAccepted",
          "termsAccepted"
        ]
      },
      "ResetPasswordAction": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "UserIndex.register.forgotPassword",
        "description": "UserIndex.register.forgotPasswordMessage",
        "type": "object",
        "properties": {
          "email": {
            "type": "string",
            "format": "email",
            "title": "UserIndex.register.placeholderEmail",
            "_display": {
              "placeholder": "UserIndex.register.placeholderEmail"
            }
          }
        },
        "required": [
          "email"
        ]
      },
      "ChangePasswordAction": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "UserIndex.password.changePassword",
        "description": "UserIndex.password.message",
        "type": "object",
        "properties": {
          "password": {
            "type": "string",
            "title": "UserIndex.password.currentPassword",
            "_display": {
              "type": "password",
              "placeholder": "UserIndex.password.currentPassword"
            }
          },
          "password_new": {
            "type": "string",
            "title": "UserIndex.password.newPassword",
            "_display": {
              "type": "password",
              "placeholder": "UserIndex.password.newPassword"
            }
          },
          "password_new_confirm": {
            "type": "string",
            "title": "UserIndex.password.confirmPassword",
            "_display": {
              "type": "password",
              "placeholder": "UserIndex.password.confirmPassword"
            }
          }
        },
        "required": [
          "password",
          "password_new",
          "password_new_confirm"
        ]
      },
      "Link": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "A link to another entity",
        "type": "object",
        "_widget": "RemoteSelect",
        "properties": {
          "@id": {
            "description": "The referenced entities unique identifier",
            "type": "string",
            "format": "uri"
          },
          "@type": {
            "type": "string"
          }
        },
        "required": [
          "@id",
          "@type"
        ]
      },
      "WebPage": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "WebPage",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "WebPage"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "WebPage.name",
            "description": "descriptions.WebPage.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "url": {
            "title": "WebPage.url",
            "description": "descriptions.WebPage.url",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "additionalType": {
            "title": "WebPage.additionalType",
            "description": "descriptions.WebPage.additionalType",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/publications.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "description": {
            "title": "WebPage.description",
            "description": "descriptions.WebPage.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "keywords": {
            "title": "WebPage.keywords",
            "description": "descriptions.WebPage.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "creator": {
            "title": "WebPage.creator",
            "description": "descriptions.WebPage.creator",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "citation": {
            "title": "WebPage.citation",
            "description": "descriptions.WebPage.citation",
            "type": "string",
            "_display": {
              "rows": 3
            }
          },
          "publisher": {
            "title": "WebPage.publisher",
            "description": "descriptions.WebPage.publisher",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization",
                        "Event",
                        "Action",
                        "Service"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "datePublished": {
            "title": "WebPage.datePublished",
            "description": "descriptions.WebPage.datePublished",
            "$ref": "#/definitions/iso-8601-date"
          },
          "inLanguage": {
            "title": "WebPage.inLanguage",
            "description": "descriptions.WebPage.inLanguage",
            "type": "array",
            "maxItems": 1,
            "items": {
              "$ref": "#/definitions/Language"
            }
          },
          "license": {
            "title": "WebPage.license",
            "description": "descriptions.WebPage.license",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/licenses.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "spatialCoverage": {
            "title": "WebPage.spatialCoverage",
            "type": "string",
            "enum": [
              "Global",
              "National",
              "State",
              "Institution - Primary",
              "Institution - Secondary",
              "Institution - Tertiary",
              "System"
            ]
          },
          "status": {
            "title": "WebPage.status",
            "type": "string",
            "enum": [
              "Proposed",
              "Current",
              "Deactivated"
            ]
          },
          "location": {
            "type": "object",
            "properties": {
              "address": {
                "type": "object",
                "properties": {
                  "addressCountry": {
                    "title": "PostalAddress.addressCountry",
                    "$ref": "#/definitions/Country"
                  },
                  "addressRegion": {
                    "title": "PostalAddress.addressRegion",
                    "type": "string"
                  }
                }
              }
            }
          },
          "comment": {
            "title": "WebPage.comment",
            "description": "descriptions.WebPage.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "award": {
            "title": "WebPage.award",
            "description": "descriptions.WebPage.award",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "primarySector": {
            "title": "WebPage.primarySector",
            "description": "descriptions.WebPage.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "WebPage.secondarySector",
            "description": "descriptions.WebPage.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "objectIn": {
            "title": "WebPage.objectIn",
            "description": "descriptions.WebPage.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "name",
          "url"
        ],
        "additionalProperties": false
      },
      "ConceptScheme": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Concept Scheme",
        "description": "A SKOS Concept Scheme",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The concept schemes's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "ConceptScheme"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "hasTopConcept": {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    }
                  }
                }
              ]
            }
          }
        },
        "additionalProperties": false
      },
      "Concept": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Concept",
        "description": "A SKOS Concept",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The concepts's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Concept"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "$ref": "#/definitions/LocalizedString"
          },
          "alternateName": {
            "$ref": "#/definitions/LocalizedString"
          },
          "scopeNote": {
            "$ref": "#/definitions/LocalizedString"
          },
          "inScheme": {
            "$ref": "#/definitions/ConceptScheme"
          },
          "topConceptOf": {
            "$ref": "#/definitions/ConceptScheme"
          },
          "narrower": {
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "broader": {
            "allOf": [
              {
                "$ref": "#/definitions/Link"
              },
              {
                "properties": {
                  "@type": {
                    "enum": [
                      "Concept"
                    ]
                  }
                }
              }
            ]
          },
          "notation": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "image": {
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          }
        },
        "additionalProperties": false
      },
      "Article": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Article",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The article's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Article"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Article.name",
            "description": "descriptions.Article.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "description": {
            "title": "Article.description",
            "description": "descriptions.Article.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "articleBody": {
            "title": "Article.articleBody",
            "description": "descriptions.Article.articleBody",
            "$ref": "#/definitions/LocalizedText"
          },
          "dateCreated": {
            "title": "Article.dateCreated",
            "description": "descriptions.Article.dateCreated",
            "$ref": "#/definitions/iso-8601-date"
          },
          "image": {
            "title": "Article.image",
            "description": "descriptions.Article.image",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "creator": {
            "title": "Article.creator",
            "description": "descriptions.Article.creator",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "mentions": {
            "title": "Article.mentions",
            "description": "descriptions.Article.mentions",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization",
                        "Person",
                        "Service",
                        "Action",
                        "Event"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "keywords": {
            "title": "Article.keywords",
            "description": "descriptions.Article.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "comment": {
            "title": "Article.comment",
            "description": "descriptions.Article.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "location": {
            "$ref": "#/definitions/Place"
          },
          "primarySector": {
            "title": "Article.primarySector",
            "description": "descriptions.Article.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Article.secondarySector",
            "description": "descriptions.Article.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "license": {
            "title": "Article.license",
            "description": "descriptions.Article.license",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/licenses.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "exampleOfWork": {
            "title": "Article.exampleOfWork",
            "description": "descriptions.Article.exampleOfWork",
            "type": "string",
            "format": "uri"
          },
          "citation": {
            "title": "Article.citation",
            "description": "descriptions.Article.citation",
            "type": "string",
            "_display": {
              "rows": 3
            }
          },
          "objectIn": {
            "title": "Article.objectIn",
            "description": "descriptions.Article.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "allOf": [
          {
            "required": [
              "name",
              "description",
              "articleBody",
              "location"
            ],
            "anyOf": [
              {
                "required": [
                  "license",
                  "creator",
                  "dateCreated"
                ]
              },
              {
                "required": [
                  "citation",
                  "exampleOfWork"
                ]
              }
            ]
          }
        ],
        "additionalProperties": false
      },
      "Comment": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Comment",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The comment's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Comment"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "author": {
            "title": "Comment.creator",
            "description": "descriptions.Comment.author",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "text": {
            "title": "Comment.text",
            "description": "descriptions.Comment.text",
            "$ref": "#/definitions/LocalizedText"
          },
          "dateCreated": {
            "title": "Comment.dateCreated",
            "description": "descriptions.Comment.dateCreated",
            "$ref": "#/definitions/iso-8601-date",
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "text"
        ],
        "additionalProperties": false
      },
      "Action": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Action",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The action's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Action"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Action.name",
            "description": "descriptions.Action.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "displayName": {
            "title": "Action.displayName",
            "description": "descriptions.Action.displayName",
            "$ref": "#/definitions/LocalizedString"
          },
          "additionalType": {
            "title": "Action.additionalType",
            "description": "descriptions.Action.additionalType",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/projects.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "email": {
            "title": "Action.email",
            "description": "descriptions.Action.email",
            "type": "string",
            "format": "email",
            "_display": {
              "placeholder": "user@example.org"
            }
          },
          "alternateName": {
            "title": "Action.alternateName",
            "description": "descriptions.Action.alternateName",
            "$ref": "#/definitions/LocalizedString"
          },
          "description": {
            "title": "Action.description",
            "description": "descriptions.Action.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "image": {
            "title": "Action.image",
            "description": "descriptions.Action.image",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "url": {
            "title": "Action.url",
            "description": "descriptions.Action.url",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "startTime": {
            "title": "Action.startTime",
            "description": "descriptions.Action.startTime",
            "$ref": "#/definitions/iso-8601-date"
          },
          "endTime": {
            "title": "Action.endTime",
            "description": "descriptions.Action.endTime",
            "$ref": "#/definitions/iso-8601-date"
          },
          "location": {
            "title": "Action.location",
            "description": "ResourceIndex.Action.edit.addressMessage",
            "$ref": "#/definitions/Place",
            "_display": {
              "collapsed": true
            }
          },
          "instrument": {
            "title": "Action.instrument",
            "description": "descriptions.Action.instrument",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Service"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "result": {
            "title": "Action.result",
            "description": "descriptions.Action.result",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Service"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "agent": {
            "title": "Action.agent",
            "description": "descriptions.Action.agent",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "participant": {
            "title": "Action.participant",
            "description": "descriptions.Action.participant",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "memberOf": {
            "title": "Action.memberOf",
            "description": "descriptions.Action.memberOf",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "affiliate": {
            "title": "Action.affiliate",
            "description": "descriptions.Action.affiliate",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "mentionedIn": {
            "title": "Action.mentionedIn",
            "description": "descriptions.Action.mentionedIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "sameAs": {
            "title": "Action.sameAs",
            "description": "descriptions.Action.sameAs",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org/"
              }
            }
          },
          "keywords": {
            "title": "Action.keywords",
            "description": "descriptions.Action.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "comment": {
            "title": "Action.comment",
            "description": "descriptions.Action.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "isPartOf": {
            "title": "Action.isPartOf",
            "description": "descriptions.Action.isPartOf",
            "allOf": [
              {
                "$ref": "#/definitions/Link"
              },
              {
                "properties": {
                  "@type": {
                    "enum": [
                      "Action"
                    ]
                  }
                }
              }
            ]
          },
          "hasPart": {
            "title": "Action.hasPart",
            "description": "descriptions.Action.hasPart",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "organizerFor": {
            "title": "Action.organizerFor",
            "description": "descriptions.Action.organizerFor",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Event"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "publication": {
            "title": "Action.publication",
            "description": "descriptions.Action.publication",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "isFundedBy": {
            "title": "Action.isFundedBy",
            "description": "descriptions.Action.isFundedBy",
            "type": "array",
            "maxItems": 1,
            "items": {
              "$ref": "#/definitions/Grant"
            }
          },
          "primarySector": {
            "title": "Action.primarySector",
            "description": "descriptions.Action.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Action.secondarySector",
            "description": "descriptions.Action.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "award": {
            "title": "Action.award",
            "description": "descriptions.Action.award",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "objectIn": {
            "title": "Action.objectIn",
            "description": "descriptions.Action.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "allOf": [
          {
            "required": [
              "name"
            ],
            "anyOf": [
              {
                "required": [
                  "location"
                ]
              },
              {
                "required": [
                  "agent"
                ]
              }
            ]
          }
        ],
        "additionalProperties": false
      },
      "Service": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Service",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The services's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Service"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Service.name",
            "description": "descriptions.Service.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "alternateName": {
            "title": "Service.alternateName",
            "description": "descriptions.Service.alternateName",
            "$ref": "#/definitions/LocalizedString"
          },
          "additionalType": {
            "title": "Service.additionalType",
            "description": "descriptions.Service.additionalType",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/services.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "serviceType": {
            "title": "Service.serviceType",
            "description": "descriptions.Service.serviceType",
            "type": "array",
            "items": {
              "type": "string"
            },
            "_display": {
              "className": "hidden"
            }
          },
          "description": {
            "title": "Service.description",
            "description": "descriptions.Service.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "startDate": {
            "title": "Service.startDate",
            "description": "descriptions.Service.startDate",
            "$ref": "#/definitions/iso-8601-date"
          },
          "endDate": {
            "title": "Service.endDate",
            "description": "descriptions.Service.endDate",
            "$ref": "#/definitions/iso-8601-date"
          },
          "email": {
            "title": "Service.email",
            "description": "descriptions.Service.email",
            "type": "string",
            "format": "email",
            "_display": {
              "placeholder": "user@example.org"
            }
          },
          "license": {
            "title": "Service.license",
            "description": "descriptions.Service.license",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/licenses.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "image": {
            "title": "Service.image",
            "description": "descriptions.Service.image",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "location": {
            "title": "Service.location",
            "description": "ResourceIndex.Service.edit.info",
            "$ref": "#/definitions/Place",
            "_display": {
              "collapsed": true
            }
          },
          "about": {
            "title": "Service.about",
            "description": "descriptions.Service.about",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://w3id.org/class/esc/scheme"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "audience": {
            "title": "Service.audience",
            "description": "descriptions.Service.audience",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://w3id.org/isced/1997/scheme"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "provider": {
            "title": "Service.provider",
            "description": "descriptions.Service.provider",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "availableChannel": {
            "title": "Service.availableChannel",
            "description": "descriptions.Service.availableChannel",
            "type": "array",
            "maxItems": 1,
            "items": {
              "type": "object",
              "properties": {
                "@type": {
                  "type": "string",
                  "enum": [
                    "ServiceChannel"
                  ],
                  "_display": {
                    "className": "hidden"
                  }
                },
                "availableLanguage": {
                  "title": "Service.availableChannel.availableLanguage",
                  "type": "array",
                  "items": {
                    "title": "LocalizedString.@language",
                    "$ref": "#/definitions/Language"
                  }
                },
                "serviceUrl": {
                  "title": "Service.availableChannel.serviceUrl",
                  "type": "string",
                  "format": "uri"
                },
                "documentation": {
                  "title": "Service.availableChannel.documentation",
                  "type": "string",
                  "format": "uri"
                }
              },
              "required": [
                "serviceUrl"
              ]
            }
          },
          "mentionedIn": {
            "title": "Service.mentionedIn",
            "description": "descriptions.Service.mentionedIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "instrumentIn": {
            "title": "Service.instrumentIn",
            "description": "descriptions.Service.instrumentIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "resultOf": {
            "title": "Service.resultOf",
            "description": "descriptions.Service.resultOf",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "member": {
            "title": "Service.member",
            "description": "descriptions.Service.member",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "memberOf": {
            "title": "Service.memberOf",
            "description": "descriptions.Service.memberOf",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "affiliate": {
            "title": "Service.affiliate",
            "description": "descriptions.Service.affiliate",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "sameAs": {
            "title": "Service.sameAs",
            "description": "descriptions.Service.sameAs",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org/"
              }
            }
          },
          "keywords": {
            "title": "Service.keywords",
            "description": "descriptions.Service.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "publication": {
            "title": "Service.publication",
            "description": "descriptions.Service.publication",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "comment": {
            "title": "Service.comment",
            "description": "descriptions.Service.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "primarySector": {
            "title": "Service.primarySector",
            "description": "descriptions.Service.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Service.secondarySector",
            "description": "descriptions.Service.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "isRelatedTo": {
            "title": "Service.isRelatedTo",
            "description": "descriptions.Service.isRelatedTo",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Product"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "award": {
            "title": "Service.award",
            "description": "descriptions.Service.award",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "objectIn": {
            "title": "Service.objectIn",
            "description": "descriptions.Service.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "allOf": [
          {
            "required": [
              "name",
              "description",
              "availableChannel"
            ],
            "anyOf": [
              {
                "required": [
                  "location"
                ]
              },
              {
                "required": [
                  "provider"
                ]
              }
            ]
          }
        ],
        "additionalProperties": false
      },
      "Person": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Person",
        "description": "ResourceIndex.Person.edit.message",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The person's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Person"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Person.name",
            "description": "descriptions.Person.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "additionalType": {
            "title": "Person.additionalType",
            "description": "descriptions.Person.additionalType",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/persons.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "url": {
            "title": "Person.url",
            "description": "descriptions.Person.url",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "email": {
            "title": "Person.email",
            "description": "descriptions.Person.email",
            "type": "string",
            "format": "email",
            "_display": {
              "placeholder": "user@example.org"
            }
          },
          "description": {
            "title": "Person.description",
            "description": "descriptions.Person.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "countryChampionFor": {
            "title": "Person.countryChampionFor",
            "description": "descriptions.Person.countryChampionFor",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Country"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "image": {
            "title": "Person.image",
            "description": "descriptions.Person.image",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "location": {
            "$ref": "#/definitions/Place"
          },
          "created": {
            "title": "Person.created",
            "description": "descriptions.Person.created",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article",
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "mentionedIn": {
            "title": "Person.mentionedIn",
            "description": "descriptions.Person.mentionedIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "participantIn": {
            "title": "Person.participantIn",
            "description": "descriptions.Person.participantIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "provides": {
            "title": "Person.provides",
            "description": "descriptions.Person.provides",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Service"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "agentIn": {
            "title": "Person.agentIn",
            "description": "descriptions.Person.agentIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action",
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "affiliation": {
            "title": "Person.affiliation",
            "description": "descriptions.Person.affiliation",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization",
                        "Service",
                        "Action"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "sameAs": {
            "title": "Person.sameAs",
            "description": "descriptions.Person.sameAs",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org/"
              }
            }
          },
          "funderOf": {
            "title": "Person.funderOf",
            "description": "descriptions.Person.funderOf",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "keywords": {
            "title": "Person.keywords",
            "description": "descriptions.Person.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "authorOf": {
            "title": "Person.authorOf",
            "description": "descriptions.Person.authorOf",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "organizerFor": {
            "title": "Person.organizerFor",
            "description": "descriptions.Person.organizerFor",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Event"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "performerIn": {
            "title": "Person.performerIn",
            "description": "descriptions.Person.performerIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Event"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "attends": {
            "title": "Person.attends",
            "description": "descriptions.Person.attends",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Event"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "primarySector": {
            "title": "Person.primarySector",
            "description": "descriptions.Person.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Person.secondarySector",
            "description": "descriptions.Person.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "activityField": {
            "title": "Person.activityField",
            "description": "descriptions.Person.activityField",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/activities.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "publication": {
            "title": "Person.publication",
            "description": "descriptions.Person.publication",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "manufactured": {
            "title": "Person.manufactured",
            "description": "descriptions.Person.manufactured",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Product"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "award": {
            "title": "Person.award",
            "description": "descriptions.Person.award",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          }
        },
        "required": [
          "name",
          "location"
        ],
        "additionalProperties": false
      },
      "Organization": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Organization",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The organization's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Organization"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Organization.name",
            "description": "descriptions.Organization.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "displayName": {
            "title": "Organization.displayName",
            "description": "descriptions.Organization.displayName",
            "$ref": "#/definitions/LocalizedString"
          },
          "additionalType": {
            "title": "Organization.additionalType",
            "description": "descriptions.Organization.additionalType",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/organizations.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "url": {
            "type": "string",
            "description": "descriptions.Organization.url",
            "format": "uri",
            "title": "Organization.url",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "email": {
            "description": "descriptions.Organization.email",
            "type": "string",
            "format": "email",
            "title": "Organization.email",
            "_display": {
              "placeholder": "user@example.org"
            }
          },
          "description": {
            "title": "Organization.description",
            "description": "descriptions.Organization.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "countryChampionFor": {
            "type": "array",
            "title": "Organization.countryChampionFor",
            "description": "descriptions.Organization.countryChampionFor",
            "items": {
              "$ref": "#/definitions/Country"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "alternateName": {
            "title": "Organization.alternateName",
            "description": "descriptions.Organization.alternateName",
            "$ref": "#/definitions/LocalizedString"
          },
          "image": {
            "description": "descriptions.Organization.image",
            "type": "string",
            "format": "uri",
            "title": "Organization.image",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "location": {
            "$ref": "#/definitions/Place"
          },
          "contactPoint": {
            "title": "Organization.contactPoint",
            "description": "descriptions.Organization.contactPoint",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "created": {
            "title": "Organization.created",
            "description": "descriptions.Organization.created",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article",
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "mentionedIn": {
            "title": "Organization.mentionedIn",
            "description": "descriptions.Organization.mentionedIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "participantIn": {
            "title": "Organization.participantIn",
            "description": "descriptions.Organization.participantIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "provides": {
            "title": "Organization.provides",
            "description": "descriptions.Organization.provides",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Service"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "agentIn": {
            "title": "Organization.agentIn",
            "description": "descriptions.Organization.agentIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "member": {
            "title": "Organization.member",
            "description": "descriptions.Organization.member",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization",
                        "Service",
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "memberOf": {
            "title": "Organization.memberOf",
            "description": "descriptions.Organization.memberOf",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization",
                        "Service"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "affiliate": {
            "title": "Organization.affiliate",
            "description": "descriptions.Organization.affiliate",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "sameAs": {
            "type": "array",
            "title": "Organization.sameAs",
            "description": "descriptions.Organization.description",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org/"
              }
            }
          },
          "organizerFor": {
            "title": "Organization.organizerFor",
            "description": "descriptions.Organization.organizerFor",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Event"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "keywords": {
            "title": "Organization.keywords",
            "description": "descriptions.Organization.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "publication": {
            "title": "Organization.publication",
            "description": "descriptions.Organization.publication",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "comment": {
            "title": "Organization.comment",
            "description": "descriptions.Organization.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "awards": {
            "title": "Organization.awards",
            "description": "descriptions.Organization.awards",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Grant"
            },
            "_display": {
              "className": "hidden"
            }
          },
          "primarySector": {
            "title": "Organization.primarySector",
            "description": "descriptions.Organization.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Organization.secondarySector",
            "description": "descriptions.Organization.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "manufactured": {
            "title": "Organization.manufactured",
            "description": "descriptions.Organization.manufactured",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Product"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "award": {
            "title": "Organization.award",
            "description": "descriptions.Organization.award",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "objectIn": {
            "title": "Organization.objectIn",
            "description": "descriptions.Organization.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "name",
          "location"
        ],
        "additionalProperties": false
      },
      "Event": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Event",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The event's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Event"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Event.name",
            "description": "descriptions.Event.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "alternateName": {
            "title": "Event.alternateName",
            "description": "descriptions.Event.alternateName",
            "$ref": "#/definitions/LocalizedString"
          },
          "url": {
            "title": "Event.url",
            "description": "descriptions.Event.url",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "email": {
            "title": "Event.email",
            "description": "descriptions.Event.email",
            "type": "string",
            "format": "email",
            "_display": {
              "placeholder": "user@example.org"
            }
          },
          "description": {
            "title": "Event.description",
            "description": "descriptions.Event.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "image": {
            "title": "Event.image",
            "description": "descriptions.Event.image",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "startDate": {
            "title": "Event.startDate",
            "$ref": "#/definitions/iso-8601-date"
          },
          "endDate": {
            "title": "Event.endDate",
            "description": "descriptions.Event.endDate",
            "$ref": "#/definitions/iso-8601-date"
          },
          "location": {
            "$ref": "#/definitions/Place"
          },
          "mentionedIn": {
            "title": "Event.mentionedIn",
            "description": "descriptions.Event.mentionedIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "sameAs": {
            "title": "Event.sameAs",
            "description": "descriptions.Event.sameAs",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org/"
              }
            }
          },
          "recordedIn": {
            "title": "Event.recordedIn",
            "description": "descriptions.Event.recordedIn",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org/"
              }
            }
          },
          "inLanguage": {
            "title": "Event.inLanguage",
            "description": "descriptions.Event.inLanguage",
            "type": "array",
            "items": {
              "$ref": "#/definitions/Language"
            }
          },
          "organizer": {
            "title": "Event.organizer",
            "description": "descriptions.Event.organizer",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person",
                        "Organization",
                        "Action"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "performer": {
            "title": "Event.performer",
            "description": "descriptions.Event.performer",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "attendee": {
            "title": "Event.attendee",
            "description": "descriptions.Event.attendee",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "about": {
            "title": "Event.about",
            "description": "descriptions.Event.about",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://w3id.org/class/esc/scheme"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "hashtag": {
            "title": "Event.hashtag",
            "description": "descriptions.Event.hashtag",
            "type": "string",
            "_display": {
              "placeholder": "#hashtag"
            }
          },
          "keywords": {
            "title": "Event.keywords",
            "description": "descriptions.Event.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "publication": {
            "title": "Event.publication",
            "description": "descriptions.Event.publication",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "WebPage"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "comment": {
            "title": "Event.comment",
            "description": "descriptions.Event.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "primarySector": {
            "title": "Event.primarySector",
            "description": "descriptions.Event.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Event.secondarySector",
            "description": "descriptions.Event.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "award": {
            "title": "Event.award",
            "description": "descriptions.Event.award",
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "objectIn": {
            "title": "Event.objectIn",
            "description": "descriptions.Event.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "name",
          "description",
          "startDate",
          "endDate",
          "location"
        ],
        "additionalProperties": false
      },
      "Product": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Product",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The tools's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Product"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Product.name",
            "description": "descriptions.Product.name",
            "$ref": "#/definitions/LocalizedString"
          },
          "alternateName": {
            "title": "Product.alternateName",
            "description": "descriptions.Product.alternateName",
            "$ref": "#/definitions/LocalizedString"
          },
          "description": {
            "title": "Product.description",
            "description": "descriptions.Product.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "url": {
            "title": "Product.url",
            "description": "descriptions.Product.url",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "image": {
            "title": "Product.image",
            "description": "descriptions.Product.image",
            "type": "string",
            "format": "uri",
            "_display": {
              "placeholder": "http://example.org/"
            }
          },
          "isRelatedTo": {
            "title": "Product.isRelatedTo",
            "description": "descriptions.Product.isRelatedTo",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Service"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "manufacturer": {
            "title": "Product.manufacturer",
            "description": "descriptions.Product.manufacturer",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization",
                        "Person"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "rights": {
            "title": "Product.rights",
            "description": "descriptions.Product.rights",
            "type": "string",
            "enum": [
              "floss",
              "proprietary"
            ]
          },
          "keywords": {
            "title": "Product.keywords",
            "description": "descriptions.Product.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "comment": {
            "title": "Product.comment",
            "description": "descriptions.Product.comment",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Comment"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "primarySector": {
            "title": "Product.primarySector",
            "description": "descriptions.Product.primarySector",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "secondarySector": {
            "title": "Product.secondarySector",
            "description": "descriptions.Product.secondarySector",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Concept"
                      ]
                    },
                    "inScheme": {
                      "type": "object",
                      "properties": {
                        "@id": {
                          "enum": [
                            "https://oerworldmap.org/assets/json/sectors.json"
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          },
          "award": {
            "type": "array",
            "title": "Product.award",
            "description": "descriptions.Product.award",
            "items": {
              "type": "string",
              "format": "uri"
            },
            "_display": {
              "className": "admin only"
            }
          },
          "objectIn": {
            "title": "Product.objectIn",
            "description": "descriptions.Product.objectIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "LikeAction",
                        "LighthouseAction"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "name"
        ],
        "additionalProperties": false
      },
      "Grant": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Grant",
        "type": "object",
        "properties": {
          "@type": {
            "type": "string",
            "enum": [
              "Grant"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "hasMonetaryValue": {
            "title": "Grant.hasMonetaryValue",
            "description": "descriptions.Grant.hasMonetaryValue",
            "type": "string"
          },
          "sameAs": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uri",
              "_display": {
                "placeholder": "http://example.org"
              }
            },
            "_display": {
              "className": "hidden"
            }
          },
          "isAwardedBy": {
            "title": "Grant.isAwardedBy",
            "description": "descriptions.Grant.isAwardedBy",
            "type": "array",
            "maxItems": 1,
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Organization"
                      ]
                    }
                  }
                }
              ]
            }
          },
          "funds": {
            "title": "Grant.funds",
            "description": "descriptions.Grant.funds",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Action"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "duration": {
            "title": "Grant.duration",
            "description": "descriptions.Grant.duration",
            "type": "string",
            "_display": {
              "className": "hidden"
            }
          },
          "description": {
            "title": "Grant.description",
            "description": "descriptions.Grant.description",
            "$ref": "#/definitions/LocalizedText",
            "_display": {
              "className": "hidden"
            }
          },
          "name": {
            "title": "Grant.name",
            "description": "descriptions.Grant.name",
            "$ref": "#/definitions/LocalizedString",
            "_display": {
              "className": "hidden"
            }
          },
          "alternateName": {
            "title": "Grant.alternateName",
            "description": "descriptions.Grant.alternateName",
            "$ref": "#/definitions/LocalizedString",
            "_display": {
              "className": "hidden"
            }
          },
          "hasAwardDate": {
            "title": "Grant.hasAwardDate",
            "description": "descriptions.Grant.hasAwardDate",
            "$ref": "#/definitions/iso-8601-date",
            "_display": {
              "className": "hidden"
            }
          },
          "mentionedIn": {
            "title": "Grant.mentionedIn",
            "description": "descriptions.Grant.mentionedIn",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Article"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "keywords": {
            "title": "Grant.keywords",
            "description": "descriptions.Grant.keywords",
            "_widget": "KeywordSelect",
            "type": "array",
            "items": {
              "type": "string"
            },
            "_display": {
              "className": "hidden"
            }
          }
        },
        "additionalProperties": false
      },
      "Place": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Place",
        "type": "object",
        "_widget": "PlaceWidget",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The place's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "Place"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "geo": {
            "title": "Place.geo",
            "$ref": "#/definitions/GeoCoordinates"
          },
          "address": {
            "title": "Place.address",
            "$ref": "#/definitions/PostalAddress"
          }
        },
        "required": [
          "address"
        ],
        "additionalProperties": false
      },
      "GeoCoordinates": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "ResourceIndex.GeoCoordinates.edit.geoCoordinates",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The geo coordinates's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "lat": {
            "title": "GeoCoordinates.latitude",
            "type": "number"
          },
          "lon": {
            "title": "GeoCoordinates.longitude",
            "type": "number"
          }
        },
        "required": [
          "lat",
          "lon"
        ],
        "additionalProperties": false
      },
      "PostalAddress": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "PostalAddress",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The geo addresses' unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "PostalAddress"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "streetAddress": {
            "title": "PostalAddress.streetAddress",
            "type": "string"
          },
          "postalCode": {
            "title": "PostalAddress.postalCode",
            "type": "string"
          },
          "postOfficeBoxNumber": {
            "title": "PostalAddress.postOfficeBoxNumber",
            "type": "string"
          },
          "addressLocality": {
            "title": "PostalAddress.addressLocality",
            "type": "string"
          },
          "addressRegion": {
            "title": "PostalAddress.addressRegion",
            "type": "string"
          },
          "addressCountry": {
            "title": "PostalAddress.addressCountry",
            "$ref": "#/definitions/Country"
          }
        },
        "required": [
          "addressCountry"
        ],
        "additionalProperties": false
      },
      "LikeAction": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "LikeAction",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The like action's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "LikeAction"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "agent": {
            "title": "LikeAction.agent",
            "description": "The agent of the like action",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "object": {
            "title": "LikeAction.object",
            "description": "The object of the like action",
            "type": "object",
            "allOf": [
              {
                "$ref": "#/definitions/Link"
              },
              {
                "properties": {
                  "@type": {
                    "enum": [
                      "Organization",
                      "Action",
                      "Service",
                      "Product",
                      "Event",
                      "Article",
                      "WebPage"
                    ]
                  }
                }
              }
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "startTime": {
            "title": "LikeAction.startTime",
            "$ref": "#/definitions/iso-8601-date",
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "agent",
          "object"
        ],
        "additionalProperties": false
      },
      "LighthouseAction": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "ResourceIndex.read.lightHouse",
        "type": "object",
        "properties": {
          "@context": {
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@id": {
            "description": "The like action's unique identifier",
            "type": "string",
            "format": "uri",
            "_display": {
              "className": "hidden"
            }
          },
          "@type": {
            "type": "string",
            "enum": [
              "LighthouseAction"
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "agent": {
            "title": "LighthouseAction.agent",
            "description": "The agent of the like action",
            "type": "array",
            "items": {
              "allOf": [
                {
                  "$ref": "#/definitions/Link"
                },
                {
                  "properties": {
                    "@type": {
                      "enum": [
                        "Person"
                      ]
                    }
                  }
                }
              ]
            },
            "_display": {
              "className": "hidden"
            }
          },
          "object": {
            "title": "LighthouseAction.object",
            "description": "The object of the like action",
            "type": "object",
            "allOf": [
              {
                "$ref": "#/definitions/Link"
              },
              {
                "properties": {
                  "@type": {
                    "enum": [
                      "Organization",
                      "Action",
                      "Service",
                      "Product",
                      "Event",
                      "Article",
                      "WebPage"
                    ]
                  }
                }
              }
            ],
            "_display": {
              "className": "hidden"
            }
          },
          "description": {
            "title": "LighthouseAction.description",
            "description": "descriptions.LighthouseAction.description",
            "$ref": "#/definitions/LocalizedText"
          },
          "startTime": {
            "title": "LighthouseAction.startTime",
            "$ref": "#/definitions/iso-8601-date",
            "_display": {
              "className": "hidden"
            }
          }
        },
        "required": [
          "agent",
          "object",
          "description"
        ],
        "additionalProperties": false
      },
      "LocalizedString": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Localized string",
        "description": "A language-tagged string",
        "type": "array",
        "items": {
          "type": "object",
          "_widget": "LocalizedString",
          "properties": {
            "@value": {
              "type": "string"
            },
            "@language": {
              "title": "LocalizedString.@language",
              "$ref": "#/definitions/Language"
            }
          },
          "required": [
            "@language",
            "@value"
          ],
          "additionalProperties": false
        }
      },
      "LocalizedText": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Localized text",
        "description": "A language-tagged text",
        "type": "array",
        "items": {
          "type": "object",
          "_widget": "LocalizedString",
          "properties": {
            "@value": {
              "type": "string",
              "_display": {
                "rows": 5
              }
            },
            "@language": {
              "title": "LocalizedText.@language",
              "$ref": "#/definitions/Language"
            }
          },
          "required": [
            "@language",
            "@value"
          ],
          "additionalProperties": false
        }
      },
      "iso-8601-date": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "ISO 8601 Date",
        "description": "A date in ISO 8601 format.",
        "type": "string",
        "pattern": "^(\\d{4})$|^(\\d{4})-(0[1-9]|1[0-2])$|(^(18|19|20)[0-9]{2}-(0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01])|^(18|19|20)[0-9]{2}-(0[469]|11)-(0[1-9]|[12][0-9]|30)|^(18|19|20)[0-9]{2}-(02)-(0[1-9]|1[0-9]|2[0-8])|^(((18|19|20)(04|08|[2468][048]|[13579][26]))|2000)-(02)-29)(T([01]\\d|2[0-3]):[0-5]\\d(:[0-5]\\d(\\.\\d{3})?(Z|((\\+[01][0-4])|\\-[01][0-2])(:?[0-5]\\d))?)?)?$",
        "_widget": "DateTime",
        "_display": {
          "placeholder": "YYYY-MM-DD"
        }
      },
      "Language": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Language",
        "description": "A language, represented by its ISO language code",
        "type": "string",
        "enum": [
          "aa",
          "ab",
          "ae",
          "af",
          "ak",
          "am",
          "an",
          "ar",
          "as",
          "av",
          "ay",
          "az",
          "ba",
          "be",
          "bg",
          "bh",
          "bi",
          "bm",
          "bn",
          "bo",
          "br",
          "bs",
          "ca",
          "ce",
          "ch",
          "co",
          "cr",
          "cs",
          "cu",
          "cv",
          "cy",
          "da",
          "de",
          "dv",
          "dz",
          "ee",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fa",
          "ff",
          "fi",
          "fj",
          "fo",
          "fr",
          "fy",
          "ga",
          "gd",
          "gl",
          "gn",
          "gu",
          "gv",
          "ha",
          "hi",
          "ho",
          "hr",
          "ht",
          "hu",
          "hy",
          "hz",
          "ia",
          "ie",
          "ig",
          "ii",
          "ik",
          "io",
          "is",
          "it",
          "iu",
          "ja",
          "jv",
          "ka",
          "kg",
          "ki",
          "kj",
          "kk",
          "kl",
          "km",
          "kn",
          "ko",
          "kr",
          "ks",
          "ku",
          "kv",
          "kw",
          "ky",
          "la",
          "lb",
          "lg",
          "li",
          "ln",
          "lo",
          "lt",
          "lu",
          "lv",
          "mg",
          "mh",
          "mi",
          "mk",
          "ml",
          "mn",
          "mo",
          "mr",
          "ms",
          "mt",
          "my",
          "na",
          "nb",
          "nd",
          "ne",
          "ng",
          "nl",
          "nn",
          "no",
          "nr",
          "nv",
          "nvi",
          "ny",
          "oc",
          "oj",
          "om",
          "or",
          "os",
          "pa",
          "pi",
          "pl",
          "ps",
          "pt",
          "qu",
          "rm",
          "rn",
          "ro",
          "ru",
          "rw",
          "sa",
          "sc",
          "sd",
          "se",
          "sg",
          "si",
          "sk",
          "sl",
          "sm",
          "smi",
          "sn",
          "so",
          "sq",
          "sr",
          "ss",
          "st",
          "su",
          "sv",
          "sw",
          "ta",
          "te",
          "tg",
          "th",
          "ti",
          "tk",
          "tl",
          "tn",
          "to",
          "tr",
          "ts",
          "tt",
          "tw",
          "ty",
          "ug",
          "uk",
          "ur",
          "uz",
          "ve",
          "vi",
          "vo",
          "wa",
          "wo",
          "xh",
          "yo",
          "za",
          "zh",
          "zu"
        ]
      },
      "Country": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "title": "Country",
        "description": "A country, represented by its ISO country code",
        "type": "string",
        "enum": [
          "AD",
          "AE",
          "AF",
          "AG",
          "AI",
          "AL",
          "AM",
          "AN",
          "AO",
          "AQ",
          "AR",
          "AS",
          "AT",
          "AU",
          "AW",
          "AX",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BL",
          "BM",
          "BN",
          "BO",
          "BQ",
          "BR",
          "BS",
          "BT",
          "BV",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CC",
          "CD",
          "CF",
          "CG",
          "CH",
          "CI",
          "CK",
          "CL",
          "CM",
          "CN",
          "CO",
          "CR",
          "CU",
          "CV",
          "CW",
          "CX",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "EH",
          "ER",
          "ES",
          "ET",
          "FI",
          "FJ",
          "FK",
          "FM",
          "FO",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GF",
          "GG",
          "GH",
          "GI",
          "GL",
          "GM",
          "GN",
          "GP",
          "GQ",
          "GR",
          "GS",
          "GT",
          "GU",
          "GW",
          "GY",
          "HK",
          "HM",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IM",
          "IN",
          "IO",
          "IQ",
          "IR",
          "IS",
          "IT",
          "JE",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KP",
          "KR",
          "KW",
          "KY",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MF",
          "MG",
          "MH",
          "MK",
          "ML",
          "MM",
          "MN",
          "MO",
          "MP",
          "MQ",
          "MR",
          "MS",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NC",
          "NE",
          "NF",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NU",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PF",
          "PG",
          "PH",
          "PK",
          "PL",
          "PM",
          "PN",
          "PR",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RE",
          "RO",
          "RS",
          "RU",
          "RW",
          "SA",
          "SB",
          "SC",
          "SD",
          "SE",
          "SG",
          "SH",
          "SI",
          "SJ",
          "SK",
          "SL",
          "SM",
          "SN",
          "SO",
          "SR",
          "SS",
          "ST",
          "SV",
          "SX",
          "SY",
          "SZ",
          "TC",
          "TD",
          "TF",
          "TG",
          "TH",
          "TJ",
          "TK",
          "TL",
          "TM",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "UM",
          "US",
          "UY",
          "UZ",
          "VA",
          "VC",
          "VE",
          "VG",
          "VI",
          "VN",
          "VU",
          "WF",
          "WS",
          "YE",
          "YT",
          "ZA",
          "ZM",
          "ZW"
        ]
      }
    },
    "_self": "http://oerworldmap.local/assets/json/schema.json",
    "_status": "OK"
  }
}
