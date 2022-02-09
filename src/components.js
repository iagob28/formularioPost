import { styled } from "@stitches/react";

export const Input = styled("input", {
  height: "40px",
  width: "120px",
  display: "flex",
  alignSelf: "center",
  borderRadius: "8px",
  border: "1px solid #d1d1d1",
});

export const Button = styled("button", {
  background: "red",
  border: "none",
  borderRadius: "8px",
  color: "White",
  width: "120px",
  height: "40px",

  "&:hover": {
    filter: "brightness(0.8)",
    cursor: "pointer",
  },
});
