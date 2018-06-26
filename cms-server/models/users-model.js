var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  update: {
    type: Date,
    default: Date.now
  },

  firstName: String,
  lastName: String,
  alias: String,
  email: String,
  password: String,
  permission: {
    media: {
      view: {
        type: Boolean,
        default: false
      },
      save: {
        type: Boolean,
        default: false
      },
      edit: {
        type: Boolean,
        default: false
      }
    },
    pages: {
      view: {
        type: Boolean,
        default: false
      },
      save: {
        type: Boolean,
        default: false
      },
      edit: {
        type: Boolean,
        default: false
      }
    },
    blog: {
      view: {
        type: Boolean,
        default: false
      },
      save: {
        type: Boolean,
        default: false
      },
      edit: {
        type: Boolean,
        default: false
      }
    },
    menu: {
      view: {
        type: Boolean,
        default: false
      },
      save: {
        type: Boolean,
        default: false
      },
      edit: {
        type: Boolean,
        default: false
      }
    },
    settings: {
      view: {
        type: Boolean,
        default: false
      },
      save: {
        type: Boolean,
        default: false
      },
      edit: {
        type: Boolean,
        default: false
      }
    },
    person: {
      view: {
        type: Boolean,
        default: false
      },
      save: {
        type: Boolean,
        default: false
      },
      edit: {
        type: Boolean,
        default: false
      }
    }
  }
});

module.exports = mongoose.model('Users', UsersSchema);
