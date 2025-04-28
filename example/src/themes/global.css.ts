import { themeContract } from "@/themes";
import { style } from "@vanilla-extract/css";

export const box = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "40px",
  gap: "12px",
});

export const field = style({
  display: "flex",
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeContract.colorNeutralBackground3,
  boxSizing: "border-box",
  gap: "8px",
});

export const fieldColumn = style({
  display: "flex",
  width: "100%",
  padding: "10px",
  borderRadius: "4px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeContract.colorNeutralBackground3,
  boxSizing: "border-box",
  gap: "12px",
});
