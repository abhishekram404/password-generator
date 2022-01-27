import {
  Card,
  CardContent,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Slider,
  Switch,
  Typography,
} from "@mui/material";
import { Sync } from "@mui/icons-material/";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import { Box } from "@mui/system";
import { generatePassword } from "../utils/GeneratePassword";
import { useEffect, useState } from "react";

type Props = {};

const GeneratorForm = (props: Props) => {
  const [generatedPassword, setGeneratedPassword] = useState<string>("");
  const [isCopied, setCopied] = useState<boolean>(false);
  const [passwordLength, setPasswordLength] = useState<number>(12);
  const [includeSpecialChars, setIncludeSpecialChars] = useState<boolean>(true);
  const [previousPassword, setPreviousPassword] = useState<string>("");
  const generate = (): void => {
    setPreviousPassword(generatedPassword);
    setCopied(false);
    setGeneratedPassword(generatePassword(passwordLength, includeSpecialChars));
  };
  const setLength = (value: number): void => {
    console.log(value);
    setPasswordLength(value);
  };
  useEffect(() => {
    generate();
  }, [passwordLength, includeSpecialChars]);

  const copyText = (): void => {
    navigator.clipboard.writeText(generatedPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Container sx={{ px: 2, py: 8 }} maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" color="text.primary" gutterBottom>
            Generate a strong password
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: 3,
            }}
          >
            <OutlinedInput
              value={generatedPassword}
              endAdornment={
                <>
                  <InputAdornment position="end">
                    <IconButton onClick={generate}>
                      <Sync />
                    </IconButton>
                    <IconButton onClick={copyText}>
                      {isCopied ? (
                        <DoneIcon sx={{ color: "green" }} />
                      ) : (
                        <ContentCopyIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                </>
              }
            />
          </Box>

          <Box
            sx={{
              margin: "35px auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Typography>Password length</Typography>
            <Slider
              sx={{ width: "250px", mx: 3 }}
              min={6}
              max={32}
              step={1}
              marks
              defaultValue={12}
              onChangeCommitted={(event: any, value: any): void => {
                setLength(value);
              }}
            />
            <Typography>{passwordLength}</Typography>
          </Box>
          <Box
            sx={{
              margin: "35px auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Typography sx={{ mr: 4 }}>Include special characters</Typography>
            <Switch
              checked={includeSpecialChars}
              onChange={(event: any) => {
                console.log(event.target.checked);
                setIncludeSpecialChars(event.target.checked);
              }}
            />
          </Box>
          {previousPassword && (
            <Typography textAlign={"center"}>
              Previous password :
              <Typography
                sx={{
                  background: "#4d4d4d",
                  color: "#eee",
                  display: "inline",
                  p: 1,
                  ml: 2,
                  borderRadius: "5px",
                }}
              >
                {previousPassword}
              </Typography>
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export default GeneratorForm;
