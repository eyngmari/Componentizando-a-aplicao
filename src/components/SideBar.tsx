import React from 'react';
import { useCallback } from 'react';

import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

export function SideBar(props: SideBarProps) {

  const handleClickButton = useCallback(
    (id: number) => {
      props.setSelectedGenreId(id)
    },
    []
  )

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export const MemoizeSideBar = React.memo(SideBar)