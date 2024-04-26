import { zodResolver } from "@hookform/resolvers/zod";
import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Checkout = forwardRef(({ handlePost }, ref) => {
  const handleClose = () => {
    ref.current.close();
  };

  const formSchema = z.object({
    name: z.string().min(2, "Name must be filled"),
    email: z.string().email("Email must be entered corretly"),
    street: z.string().min(15, "You must provide a correct street address"),
    postalCode: z.string().min(4, "You must provide a valid Postal Code"),
    city: z.string().min(1, "You must enter a valid city name"),
  });

  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <dialog ref={ref} className="modal">
      <form className="control" onSubmit={handleSubmit(handlePost)}>
        <label htmlFor="name">Full Name </label>
        {
          <span style={{ color: "red", marginBottom: 5 }}>
            {errors?.name?.message}
          </span>
        }
        <input {...register("name")} type="text" name="name" id="name" />
        <label htmlFor="email">E-Mail Adress </label>
        {
          <span style={{ color: "red", marginBottom: 5 }}>
            {errors?.email?.message}
          </span>
        }
        <input {...register("email")} type="email" name="email" id="email" />
        <label htmlFor="street">Street </label>
        {
          <span style={{ color: "red", marginBottom: 5 }}>
            {errors?.street?.message}
          </span>
        }
        <input {...register("street")} type="text" name="street" id="street" />
        <div className="control-row">
          <span>
            <label htmlFor="postalCode">Postal Code </label>
            {
              <span style={{ color: "red", marginBottom: 5 }}>
                <br />
                {errors?.postalCode?.message}
              </span>
            }
            <input {...register("postalCode")} type="text" name="postalCode" />
          </span>

          <span>
            <label htmlFor="city">City</label>
            {
              <span style={{ color: "red", marginBottom: 5 }}>
                <br />
                {errors?.city?.message}
              </span>
            }
            <input {...register("city")} type="text" name="city" />
          </span>
        </div>
        <div className="modal-actions">
          <p className="text-button" onClick={handleClose}>
            Close
          </p>
          <button type="submit" className="button">
            Go to Checkout
          </button>
        </div>
      </form>
    </dialog>
  );
});

export default Checkout;
