import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

interface Props {
  highScore: {
    id?: number;
    game: string;
    score: number;
  };
}

export default function ({ highScore }: Props) {
  const [values, setValues] = useState({
    game: highScore.game ?? "",
    score: highScore.score ?? "",
  });

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    Inertia.post("/high_scores", values);
  }

  const update = false;

  return (
    <>
      {/* <% if high_score.errors.any? %>
    <div id="error_explanation">
      <h2><%= pluralize(high_score.errors.count, "error") %> prohibited this high_score from being saved:</h2>

      <ul>
        <% high_score.errors.full_messages.each do |message| %>
          <li><%= message %></li>
        <% end %>
      </ul>
    </div>
  <% end %> */}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="game">Game:</label>
          <input
            id="game"
            type="text"
            value={values.game}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="score">Score:</label>
          <input
            id="score"
            type="number"
            value={values.score}
            onChange={handleChange}
          />
        </div>

        <div className="actions">
          <input
            name="commit"
            type="submit"
            value={
              highScore.id != undefined
                ? "Update High score"
                : "Create High score"
            }
          />
        </div>
      </form>
    </>
  );
}
