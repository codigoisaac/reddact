import React from "react";

const NoMorePostsNote = () => {
  return (
    <div className="py-3 text-center text-gray-700 dark:text-gray-500 text-sm">
      Não há mais posts para mostrar.{" "}
      <span
        className="underline cursor-pointer text-_purple dark:text-purple-400 hover:text-purple-400 dark:hover:text-_purple"
        onClick={() => window.scrollTo(0, 0)}
      >
        Voltar ao topo.
      </span>
    </div>
  );
};

export default NoMorePostsNote;
