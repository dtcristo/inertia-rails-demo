import React from "react";
import { InertiaLink, usePage } from "@inertiajs/inertia-react";

interface Props {
  highScore: {
    id: number;
    game: string;
    score: number;
    path: string;
    editPath: string;
  };
  indexPath: string;
}

export default function({ highScore, indexPath }: Props) {
  const { notice } = usePage();

  return (
    <>
      {notice && <p id="notice">{notice}</p>}
      <p>
        <strong>Game:</strong> {highScore.game}
      </p>
      <p>
        <strong>Score:</strong> {highScore.score}
      </p>
      <InertiaLink href={highScore.editPath}>Edit</InertiaLink>{" "}
      <InertiaLink href={indexPath}>Back</InertiaLink>
    </>
  );
}
