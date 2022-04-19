import ContentContainer from "../../../commons/contentContainer/ContentContainer";
import { SocialNetworks } from "./Data";
import IconLink from "./iconLink/IconLink";
import { SocialNetworksProps } from "./interfaces";
import { ALinkContainer, SocialDataContainer, Text } from "./SocialDataStyles";

const SocialData = () => {
  return (
    <SocialDataContainer>
      <ContentContainer>
        <Text>
          Hola! De momento no he dejado un formulario, pero seguro en un futuro
          lo estare agregando, pero de momento puedes encontrarme en Linkedin y
          GitHub!
        </Text>
        <ALinkContainer>
          {SocialNetworks.map((icon: SocialNetworksProps) => {
            return (
              <IconLink to={icon.url} key={icon.url}>
                <icon.icon />
              </IconLink>
            );
          })}
        </ALinkContainer>
        <Text>
          Puedes consultar lo que necesites o simplemente pasar a saludar y
          charlar un rato!
        </Text>
      </ContentContainer>
    </SocialDataContainer>
  );
};

export default SocialData;
