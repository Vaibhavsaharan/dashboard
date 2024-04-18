import ListItemDetail from "../common/listItemDetail/listItemDetail";

const Activity = () => {
  const notificationItems = [
    { icon: "noti-1.svg", title: "You fixed a bug", subtitle: "Just now" },
    {
      icon: "noti-2.svg",
      title: "New user registered",
      subtitle: "59 minutes ago",
    },
    { icon: "noti-3.svg", title: "You fixed a bug", subtitle: "12 hours ago" },
    {
      icon: "noti-4.svg",
      title: "Andi Lane subscribed to you",
      subtitle: "Today, 11:59 AM",
    },
  ];
  const activityItems = [
    { icon: "acti-1.svg", title: "Changed the style.", subtitle: "Just now" },
    {
      icon: "acti-2.svg",
      title: "Released a new version.",
      subtitle: "59 minutes ago",
    },
    { icon: "acti-3.svg", title: "Submitted a bug.", subtitle: "12 hours ago" },
    {
      icon: "acti-4.svg",
      title: "Modified A data in Page X",
      subtitle: "Today, 11:59 AM",
    },
    {
      icon: "acti-5.svg",
      title: "Deleted a page in Project X",
      subtitle: "Feb 2, 2024",
    },
  ];
  const contactItems = [
    { icon: "contact-1.svg", title: "Natali Craig" },
    { icon: "contact-2.svg", title: "Drew Cano" },
    { icon: "contact-3.svg", title: "Andi Lane" },
    { icon: "contact-4.svg", title: "Koray Okumus" },
    { icon: "contact-5.svg", title: "Kate Morrison" },
    { icon: "contact-6.svg", title: "Melody Macy" },
  ];
  return (
    <div className="p-4">
      <div>
        <div className="pb-6">
          <div className="pb-2">Notifications</div>
          {notificationItems.map((item, index) => (
            <div key={index}>
              <ListItemDetail
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              ></ListItemDetail>
            </div>
          ))}
        </div>
        <div className="pb-6">
          <div className="pb-2">Activities</div>
          {activityItems.map((item, index) => (
            <div key={index}>
              <ListItemDetail
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
              ></ListItemDetail>
            </div>
          ))}
        </div>
        <div className="pb-6">
          <div className="pb-2">Contacts</div>
          {contactItems.map((item, index) => (
            <div key={index}>
              <ListItemDetail
                icon={item.icon}
                title={item.title}
              ></ListItemDetail>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
