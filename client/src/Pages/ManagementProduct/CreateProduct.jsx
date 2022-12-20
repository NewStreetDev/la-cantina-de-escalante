import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { Toaster, toast } from "react-hot-toast";
import { createProductScheme } from "../../schemas";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../Components/CustomTextarea";
import CustomSelect from "../../Components/CustomSelect";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../context/ProductProvider";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CreateProduct() {
  const { createProduct, getProduct, updateProduct } = useProduct();
  const { idproduct } = useParams();
  const [Product, setProduct] = useState({
    Name: "",
    Price: "",
    Description: "",
    DescriptionEnglish: "",
    CategoryID: "",
  });

  useEffect(() => {
    const LoadData = async () => {
      if (idproduct) {
        const result = await getProduct(idproduct);
        setProduct({
          Name: result.Name,
          Price: result.Price,
          Description: result.Description,
          DescriptionEnglish: result.DescriptionEnglish,
          CategoryID: result.CategoryID,
        });
      }
    };
    LoadData();
  }, []);

  const navigate = useNavigate();
  return (
    <ContentPage>
      <h1 className="titleSection">Crear Producto</h1>
      <Formik
        validationSchema={createProductScheme}
        enableReinitialize={true}
        initialValues={Product}
        onSubmit={async (values, actions) => {
          if (idproduct) {
            const response = await updateProduct(idproduct, values);
            if (response) {
              toast.success("Producto Actualizado", {
                position: "bottom-center",
                autoClose: 3000,
              });
              actions.resetForm();
              await sleep(3000);
              navigate("/managementProduct");
            } else {
              toast.error("Producto No Actualizado", {
                position: "bottom-center",
                autoClose: 3000,
              });
            }
          } else {
            const result = await createProduct(values);
            if (result) {
              toast.success("Producto Creado", {
                position: "bottom-center",
                autoClose: 3000,
              });
              actions.resetForm();
              await sleep(3000);
              navigate("/managementProduct");
            } else {
              toast.error("Producto No Creado", {
                position: "bottom-center",
                autoClose: 3000,
              });
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <CustomInput
              label="Titulo del producto"
              name="Name"
              type="text"
              placeholder="Escriba el nombre del producto"
            />
            <CustomInput
              label="Precio del producto"
              name="Price"
              type="number"
              placeholder="Escriba el precio"
            />
            <CustomTextarea
              label="Descripcion en Español"
              name="Description"
              placeholder="Descripcion del producto"
            />
            <CustomTextarea
              label="Descripcion en Ingles"
              name="DescriptionEnglish"
              placeholder="Descripcion del producto"
            />
            <CustomSelect label="Categoría del producto" name="CategoryID">
              <option value="">Please select a job</option>
              <option value="1">Almuerzos</option>
              <option value="2">Licores</option>
            </CustomSelect>
            <div className="buttonContent">
              <button className="button" type="submit" disabled={isSubmitting}>
                {idproduct ? "Actualizar" : "Crear"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster />
    </ContentPage>
  );
}

export default CreateProduct;

const ContentPage = styled.article`
  min-height: 100vh;
  padding: 80px 0;
  h1 {
    color: #222;
  }
  .form {
    padding: 30px 10px;
  }
`;
