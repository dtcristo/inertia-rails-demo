import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Form from "./_form";

interface Props {
  highScore: {
    id: number;
    game: string;
    score: number;
    path: string;
  };
  indexPath: string;
}

export default function ({ highScore, indexPath }: Props) {
  return (
    <>
      <h1>Editing High Score</h1>
      <Form highScore={highScore}></Form>
      <InertiaLink href={highScore.path}>Show</InertiaLink> |{" "}
      <InertiaLink href={indexPath}>Back</InertiaLink>
    </>
  );
}
