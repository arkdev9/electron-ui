const myTheme = {
    "name": "myTheme",
    "rounding": 4,
    "spacing": 24,
    "defaultMode": "light",
    "global": {
      "colors": {
        "brand": {
          "dark": "#FF4D00",
          "light": "#FF4D00"
        },
        "background": {
          "dark": "#111111",
          "light": "#FFFFFF"
        },
        "background-back": {
          "dark": "#111111",
          "light": "#EEEEEE"
        },
        "background-front": {
          "dark": "#222222",
          "light": "#FFFFFF"
        },
        "background-contrast": {
          "dark": "#FFFFFF11",
          "light": "#11111111"
        },
        "text": {
          "dark": "#EEEEEE",
          "light": "#333333"
        },
        "text-strong": {
          "dark": "#FFFFFF",
          "light": "#000000"
        },
        "text-weak": {
          "dark": "#CCCCCC",
          "light": "#444444"
        },
        "text-xweak": {
          "dark": "#999999",
          "light": "#666666"
        },
        "border": {
          "dark": "#444444",
          "light": "#CCCCCC"
        },
        "control": "brand",
        "active-background": "background-contrast",
        "active-text": "text-strong",
        "selected-background": "brand",
        "selected-text": "text-strong",
        "status-critical": "#FF4040",
        "status-warning": "#FFAA15",
        "status-ok": "#00C781",
        "status-unknown": "#CCCCCC",
        "status-disabled": "#CCCCCC",
        "graph-0": "brand",
        "graph-1": "status-warning"
      },
      "font": {
        "family": "ProximaNova",
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "active": {
        "background": "active-background",
        "color": "active-text"
      },
      "hover": {
        "background": "active-background",
        "color": "active-text"
      },
      "selected": {
        "background": "selected-background",
        "color": "selected-text"
      },
      "borderSize": {
        "xsmall": "1px",
        "small": "2px",
        "medium": "4px",
        "large": "12px",
        "xlarge": "24px"
      },
      "breakpoints": {
        "small": {
          "value": 768,
          "borderSize": {
            "xsmall": "1px",
            "small": "2px",
            "medium": "4px",
            "large": "6px",
            "xlarge": "12px"
          },
          "edgeSize": {
            "none": "0px",
            "hair": "1px",
            "xxsmall": "2px",
            "xsmall": "3px",
            "small": "6px",
            "medium": "12px",
            "large": "24px",
            "xlarge": "48px"
          },
          "size": {
            "xxsmall": "24px",
            "xsmall": "48px",
            "small": "96px",
            "medium": "192px",
            "large": "384px",
            "xlarge": "768px",
            "full": "100%"
          }
        },
        "medium": {
          "value": 1536
        },
        "large": {}
      },
      "edgeSize": {
        "none": "0px",
        "hair": "1px",
        "xxsmall": "3px",
        "xsmall": "6px",
        "small": "12px",
        "medium": "24px",
        "large": "48px",
        "xlarge": "96px",
        "responsiveBreakpoint": "small"
      },
      "input": {
        "padding": "12px",
        "weight": 600
      },
      "spacing": "24px",
      "size": {
        "xxsmall": "48px",
        "xsmall": "96px",
        "small": "192px",
        "medium": "384px",
        "large": "768px",
        "xlarge": "1152px",
        "xxlarge": "1536px",
        "full": "100%"
      },
      "control": {
        "border": {
          "radius": "4px"
        }
      },
      "drop": {
        "border": {
          "radius": "4px"
        }
      }
    },
    "chart": {},
    "diagram": {
      "line": {}
    },
    "meter": {},
    "scale": 0.5,
    "button": {
      "border": {
        "width": "2px",
        "radius": "4px"
      },
      "padding": {
        "vertical": "4px",
        "horizontal": "22px"
      }
    },
    "calendar": {
      "small": {
        "fontSize": "16px",
        "lineHeight": 1.375,
        "daySize": "27.43px"
      },
      "medium": {
        "fontSize": "18px",
        "lineHeight": 1.45,
        "daySize": "54.86px"
      },
      "large": {
        "fontSize": "24px",
        "lineHeight": 1.11,
        "daySize": "109.71px"
      }
    },
    "checkBox": {
      "size": "24px",
      "toggle": {
        "radius": "4px",
        "size": "48px"
      },
      "check": {
        "radius": "4px"
      }
    },
    "clock": {
      "analog": {
        "hour": {
          "width": "8px",
          "size": "24px"
        },
        "minute": {
          "width": "4px",
          "size": "12px"
        },
        "second": {
          "width": "3px",
          "size": "9px"
        },
        "size": {
          "small": "72px",
          "medium": "96px",
          "large": "144px",
          "xlarge": "216px",
          "huge": "288px"
        }
      },
      "digital": {
        "text": {
          "xsmall": {
            "size": "14px",
            "height": 1.5
          },
          "small": {
            "size": "16px",
            "height": 1.43
          },
          "medium": {
            "size": "18px",
            "height": 1.375
          },
          "large": {
            "size": "20px",
            "height": 1.167
          },
          "xlarge": {
            "size": "22px",
            "height": 1.1875
          },
          "xxlarge": {
            "size": "26px",
            "height": 1.125
          }
        }
      }
    },
    "heading": {
      "level": {
        "1": {
          "small": {
            "size": "26px",
            "height": "32px",
            "maxWidth": "624px"
          },
          "medium": {
            "size": "34px",
            "height": "40px",
            "maxWidth": "816px"
          },
          "large": {
            "size": "50px",
            "height": "56px",
            "maxWidth": "1200px"
          },
          "xlarge": {
            "size": "66px",
            "height": "72px",
            "maxWidth": "1584px"
          }
        },
        "2": {
          "small": {
            "size": "24px",
            "height": "30px",
            "maxWidth": "576px"
          },
          "medium": {
            "size": "30px",
            "height": "36px",
            "maxWidth": "720px"
          },
          "large": {
            "size": "36px",
            "height": "42px",
            "maxWidth": "864px"
          },
          "xlarge": {
            "size": "42px",
            "height": "48px",
            "maxWidth": "1008px"
          }
        },
        "3": {
          "small": {
            "size": "22px",
            "height": "28px",
            "maxWidth": "528px"
          },
          "medium": {
            "size": "26px",
            "height": "32px",
            "maxWidth": "624px"
          },
          "large": {
            "size": "30px",
            "height": "36px",
            "maxWidth": "720px"
          },
          "xlarge": {
            "size": "34px",
            "height": "40px",
            "maxWidth": "816px"
          }
        },
        "4": {
          "small": {
            "size": "20px",
            "height": "26px",
            "maxWidth": "480px"
          },
          "medium": {
            "size": "22px",
            "height": "28px",
            "maxWidth": "528px"
          },
          "large": {
            "size": "24px",
            "height": "30px",
            "maxWidth": "576px"
          },
          "xlarge": {
            "size": "26px",
            "height": "32px",
            "maxWidth": "624px"
          }
        },
        "5": {
          "small": {
            "size": "17px",
            "height": "23px",
            "maxWidth": "408px"
          },
          "medium": {
            "size": "17px",
            "height": "23px",
            "maxWidth": "408px"
          },
          "large": {
            "size": "17px",
            "height": "23px",
            "maxWidth": "408px"
          },
          "xlarge": {
            "size": "17px",
            "height": "23px",
            "maxWidth": "408px"
          }
        },
        "6": {
          "small": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "384px"
          },
          "medium": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "384px"
          },
          "large": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "384px"
          },
          "xlarge": {
            "size": "16px",
            "height": "22px",
            "maxWidth": "384px"
          }
        }
      }
    },
    "paragraph": {
      "small": {
        "size": "17px",
        "height": "23px",
        "maxWidth": "408px"
      },
      "medium": {
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "large": {
        "size": "20px",
        "height": "26px",
        "maxWidth": "480px"
      },
      "xlarge": {
        "size": "22px",
        "height": "28px",
        "maxWidth": "528px"
      },
      "xxlarge": {
        "size": "26px",
        "height": "32px",
        "maxWidth": "624px"
      }
    },
    "radioButton": {
      "size": "24px",
      "check": {
        "radius": "4px"
      }
    },
    "text": {
      "xsmall": {
        "size": "16px",
        "height": "22px",
        "maxWidth": "384px"
      },
      "small": {
        "size": "17px",
        "height": "23px",
        "maxWidth": "408px"
      },
      "medium": {
        "size": "18px",
        "height": "24px",
        "maxWidth": "432px"
      },
      "large": {
        "size": "20px",
        "height": "26px",
        "maxWidth": "480px"
      },
      "xlarge": {
        "size": "22px",
        "height": "28px",
        "maxWidth": "528px"
      },
      "xxlarge": {
        "size": "26px",
        "height": "32px",
        "maxWidth": "624px"
      }
    },
    "layer": {
      "background": {
        "dark": "#111111",
        "light": "#FFFFFF"
      }
    },
    "formField": {
      "border": {
        "color": "border",
        "error": {
          "color": {
            "dark": "white",
            "light": "status-critical"
          }
        },
        "position": "inner",
        "side": "bottom"
      },
      "content": {
        "pad": "small"
      },
      "disabled": {
        "background": {
          "color": "status-disabled",
          "opacity": "medium"
        }
      },
      "error": {
        "color": {
          "dark": "status-critical",
          "light": "status-critical"
        },
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "help": {
        "color": {
          "dark": "dark-3",
          "light": "dark-3"
        },
        "margin": {
          "start": "small"
        }
      },
      "label": {
        "margin": {
          "vertical": "xsmall",
          "horizontal": "small"
        }
      },
      "margin": {
        "bottom": "small"
      },
      "round": "4px"
    }
  }

  
  export default myTheme;