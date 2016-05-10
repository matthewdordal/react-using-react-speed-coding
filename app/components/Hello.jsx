import React from 'react';

export default function Hello(props) {
  return (
    <div className="title-shadow">
      What's my mofo name {props.greet} {props.message}
    </div>
  );
}