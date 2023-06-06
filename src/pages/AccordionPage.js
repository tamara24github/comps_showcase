import Accordion from "../components/Accordion";

function AccordionPage() {

  const items = [
    {
      id: "213",
      label: "Can I use React on a project?",
      content:
        "1.You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: "567",
      label: "Can I use JavaScript on a project?",
      content:
        "2.You can use JavaScript on any project you want. You can use JavaScript on any project you want.",
    },
    {
      id: "459",
      label: "Can I use CSS on a project?",
      content:
        "3.You can use CSS on any project you want. You can use CSS on any project you want.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
