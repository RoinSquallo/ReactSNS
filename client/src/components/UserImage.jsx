import { Box } from "@mui/material";

const UserImage = ({ path, size = "60px"}) => {
    return (
        <Box width={size} height={size}>
            <img 
                style = {{ objectFit: "cover", borderRadis: "50%" }}
                width = {size}
                height = {size}
                alt = "user"
                src = {`http://localhost:3001/assets/${path}`}
            />
        </Box>
    )
};
export default UserImage;