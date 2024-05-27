const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    team_id: {
      type: Number,
      required: true,
    },
    team_name: {
      type: String,
      required: true,
    },
    conference: {
      type: String,
      required: true,
    },
    win_pct: {
      type: Number,
      required: true,
    },
    conference_record: {
      type: String,
      required: true,
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Team", teamSchema);
