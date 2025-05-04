/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

import CustomInputField from "@/components/custom-input/CustomInputField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateProductMutation } from "@/redux/features/products/productApi";
import { useState } from "react";
import { toast } from "sonner";
import { GrChapterAdd } from "react-icons/gr";
const formSchema = z.object({
  name: z.string().min(1, "Name is required."),
  image: z.string().optional(),
  description: z.string().min(1, "Description is required."),
  brand: z.string().min(1, "Brand is required."),
  price: z.number().min(1, "Price cannot be  0."),
  quantity: z.number().min(1, "Quantity cannot be 0."),
  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"], {
    errorMap: () => ({ message: "Invalid category" }),
  }),
  model: z.string().min(1, "Model is required."),
});

const AddProduct = () => {
  const [open, setOpen] = useState(false);
  const [addProduct] = useCreateProductMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      brand: "",
      price: 0,
      quantity: 0,
      category: undefined,
      model: "",
    },
  });

  const { reset } = form;
  // image upload to coudinary start
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (file: File) => {
    setImage(file);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Adding Product...");

    try {
      // image upload start
      if (!image)
        return toast.error("Please select an image first!", { id: toastId });

      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "bikeStore"); // Replace with your Cloudinary preset

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dw9zuuylj/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      // console.log(result,response,"asdfdfff") // ✅ Parse the response correctly
      const imageUrl = result.secure_url;
      const productData = {
        ...data,
        image: imageUrl,
      };
      // image upload end
      const res = await addProduct(productData);
      // console.log(res, "trest");
      if (res?.data) {
        toast.success("Product added successfully!", { id: toastId });
        reset();
        setOpen(false);
      } else if (res?.error) {
        toast.error("Failed to add product. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error("Failed to add product. Please try again.", { id: toastId });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="px-3 py-2 text-white rounded bg-primary-black hover:shadow-md "
        >
          <div className=" flex gap-2 font-semibold text-base">
            <div className=" mt-1">
              <GrChapterAdd />
            </div>
            <div className="">Add Product</div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle className="sr-only">Add Product</DialogTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full max-w-md mx-auto "
          >
            {/* Name */}
            <CustomInputField
              name="name"
              label="Bike Name"
              placeholder="Enter Product name"
              type="text"
              control={form.control}
            />

            {/* Image */}
            <FormField
              control={form.control}
              name="image"
              render={({ fieldState: { error } }) => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageChange(file); // Store the selected file in state
                        }
                      }}
                    />
                  </FormControl>
                  {error && <p className="text-red-500">{error.message}</p>}
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter description" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Category (Select) */}
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Mountain">Mountain</SelectItem>
                          <SelectItem value="Road">Road</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                          <SelectItem value="Electric">Electric</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Model */}
            <CustomInputField
              name="model"
              label="Bike Model"
              placeholder="Bike Model.."
              type="text"
              control={form.control}
            />

            {/* Brand */}
            <CustomInputField
              name="brand"
              label="Brand Name"
              placeholder="Enter Brand name"
              type="text"
              control={form.control}
            />

            <div className="flex items-center justify-between gap-4 ">
              {/* Price */}

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Price"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Quantity */}
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Quantity"
                        {...field}
                        value={field.value ?? ""}
                        onChange={(e) => {
                          const value = parseFloat(e.target.value);
                          field.onChange(isNaN(value) ? "" : value);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded bg-primary-black hover:shadow-md"
            >
              Add Product
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
