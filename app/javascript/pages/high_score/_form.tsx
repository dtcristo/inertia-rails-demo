import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

interface Props {
  highScore: {
    id?: number;
    game: string;
    score: number;
    errors: {
      [key: string]: string[];
    };
  };
  path: string;
  method: "post" | "patch";
}

export default function ({ highScore, path, method }: Props) {
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
    Inertia.visit(path, { method, data: values });
  }

  const ErrorWrapper: React.FC<{ field: string }> = ({ field, children }) => {
    if (highScore.errors[field] != undefined) {
      return <div className="field_with_errors">{children}</div>;
    } else {
      return <>{children}</>;
    }
  };

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
          <ErrorWrapper field="game">
            <label htmlFor="game">Game:</label>
          </ErrorWrapper>
          <ErrorWrapper field="game">
            <input
              id="game"
              type="text"
              value={values.game}
              onChange={handleChange}
            />
          </ErrorWrapper>
        </div>

        <div className="field">
          <ErrorWrapper field="score">
            <label htmlFor="score">Score:</label>
          </ErrorWrapper>
          <ErrorWrapper field="score">
            <input
              id="score"
              type="number"
              value={values.score}
              onChange={handleChange}
            />
          </ErrorWrapper>
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
