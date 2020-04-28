import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Form from "./_form";

interface Props {
  highScore: {
    game: string;
    score: number;
  };
  indexPath: string;
}

export default function ({ highScore, indexPath }: Props) {
  return (
    <>
      <h1>New High Score</h1>
      <Form highScore={highScore}></Form>
      <InertiaLink href={indexPath}>Back</InertiaLink>
    </>
  );
}
