import {
  Accompaniment,
  ContentProduct,
  HeaderProduct,
  InformationProduct,
  PriceProduct,
  ProductDiv,
  Comments,
  SeeProduct
} from "../Pages/Menu/Menu.elements";

export default function ModelProduct({ Items, t, optionalClass, setClickedImg }) {
  return (
    <>
      {Items.map((item, index) => {
        return (
          <ProductDiv key={index}>
            <ContentProduct>
              <HeaderProduct className={optionalClass === "sauce" ? "sauce" : ""}>
                <h2 translate="no">
                  {item.notranslate
                    ? item.title
                    : t(`MenuTitle.${item.title}`)}
                </h2>
                {item.price ? <PriceProduct>{item.price}</PriceProduct> : null}
              </HeaderProduct>
              {item.description ? (
                <InformationProduct>
                  <p translate="no">{t(`MenuDescription.${item.description}`)}</p>
                </InformationProduct>
              ) : null}
              {item.comment
              ? (
                <Comments translate="no">
                  {t(`Comments.${item.comment}`)}
                </Comments>
              )
                : null
              }
              {item.accompaniment 
                ? (
                  <Accompaniment>
                    <h4 translate="no">{t(`MenuTitle.accompaniment`)}</h4>
                    <p translate="no">{t(`accompaniment.${item.accompaniment}`)}</p>
                  </Accompaniment>
                )
                : null
              }
              {item.urlImage ? (
                <SeeProduct onClick={() => setClickedImg(item.urlImage)} translate="no">
                  {t("ModelProduct.span")}
                </SeeProduct>
              ) : null}
            </ContentProduct>
          </ProductDiv>
        );
      })}
    </>
  );
}
