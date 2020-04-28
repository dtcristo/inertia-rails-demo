import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Form from "./_form";

interface Props {
  highScore: {
    game: string;
    score: number;
  };
  createPath: string;
  indexPath: string;
}

export default function ({ highScore, createPath, indexPath }: Props) {
  return (
    <>
      <h1>New High Score</h1>
      <Form highScore={highScore} path={createPath} method="post"></Form>
      <InertiaLink href={indexPath}>Back</InertiaLink>
    </>
  );
}
