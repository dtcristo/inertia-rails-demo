import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

interface Props {
  highScores: Array<{
    id: number;
    game: string;
    score: number;
    path: string;
    editPath: string;
  }>;
  createPath: string;
}

export default function({ highScores, createPath }: Props) {
  const { notice } = usePage();

  function handleDestroy(e) {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      Inertia.delete(e.target.href);
    }
  }

  return (
    <>
      {notice && <p id="notice">{notice}</p>}
      <h1>High Scores</h1>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Score</th>
            <th colSpan="3"></th>
          </tr>
        </thead>

        <tbody>
          {highScores.map((highScore, i) => (
            <tr key={i}>
              <td>{highScore.game}</td>
              <td>{highScore.score}</td>
              <td>
                <InertiaLink href={highScore.path}>Show</InertiaLink>
              </td>
              <td>
                <InertiaLink href={highScore.editPath}>Edit</InertiaLink>
              </td>
              <td>
                <a href={highScore.path} onClick={handleDestroy}>
                  Destroy
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <InertiaLink href={createPath}>New High Score</InertiaLink>
    </>
  );
}
